import clsx from 'clsx';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { isUndefined } from 'lodash';

interface Props {
    path: string;
    columns: {
        head: string;
        dataItem: string;
        cellType?: 'image';
    }[];
    uniqueField: string;
    className?: string;
    queryKey?: string;
    dataParser?: Function;
}

const thCss = clsx(
    'font-medium',
    'p-4',
    'pl-8',
    'py-2',
    'text-slate-400',
    'text-left'
);

const tdCss = clsx('p-4', 'pl-8', 'py-2');

export const List = ({
    columns,
    className,
    dataParser,
    path,
    uniqueField,
    queryKey = 'data',
}: Props) => {
    const { data, isPending, error } = useQuery({
        queryKey: [queryKey],
        queryFn: async () => {
            try {
                const response = await axios.get(path);
                let data = response.data;

                if (!!dataParser) {
                    data = dataParser(data);
                }

                return data;
            } catch (error) {
                const message = 'Ops! \nSomthing is wrong with getting request';
                alert(message);
            }
        },
    });

    return (
        <div
            className={clsx(
                'max-w-full',
                'max-h-[500px]',
                'overflow-y-auto',
                'overflow-x-auto',
                'whitespace-nowrap',
                'border',
                'border-gray20',
                'rounded',
                className
            )}
        >
            <table
                className={clsx(
                    'table-auto',
                    'text-sm',
                    'border-collapse',
                    'w-full'
                )}
            >
                <thead className="bg-gray40">
                    <tr className={clsx('border-b')}>
                        {columns.map((column, index) => (
                            <th key={index} className={thCss}>
                                {column.head}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className={clsx('bg-white', 'max-h-96')}>
                    {isPending || error ? (
                        <tr
                            className={clsx(
                                'flex',
                                'justify-center',
                                'py-10',
                                'w-full'
                            )}
                        >
                            <td>
                                {isPending
                                    ? 'Loading...'
                                    : `An error has occurred: ${
                                          isUndefined(error?.message)
                                              ? ''
                                              : error.message
                                      }`}
                            </td>
                        </tr>
                    ) : (
                        <>
                            {data?.map(
                                (item: { [key: string]: string | number }) => (
                                    <tr
                                        key={item[uniqueField]}
                                        className={clsx('border-b')}
                                    >
                                        {columns.map((column, index) => {
                                            const { dataItem, cellType } =
                                                column;

                                            return (
                                                <td
                                                    className={tdCss}
                                                    key={index}
                                                >
                                                    {cellType === 'image' ? (
                                                        <img
                                                            className={clsx(
                                                                'w-full',
                                                                'max-w-[30px]',
                                                                'self-center',
                                                                'justify-self-center'
                                                            )}
                                                            src={
                                                                item[
                                                                    dataItem
                                                                ] as string
                                                            }
                                                            alt=""
                                                        />
                                                    ) : (
                                                        item[dataItem]
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                )
                            )}
                        </>
                    )}
                </tbody>
            </table>
        </div>
    );
};
