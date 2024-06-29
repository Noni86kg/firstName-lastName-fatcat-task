import { useState } from 'react';
import clsx from 'clsx';
import { Button, List, Layout } from '@/components';
const buttons = ['25%', '50%', '75%', 'full'];

interface Data {
    capital: string[];
    currencies?: { [key: string]: { name: string } };
    name: { common: string };
    region: string;
    flags: { png: string };
    population: number;
}

interface ParsedData {
    name?: string;
    region: string;
    flag: string;
    capital: string;
    population: number;
    currency: string;
}

export const ListExample = () => {
    const [layOutWidth, setLayOutWidth] = useState('full');
    const [secondLayOutWidth, setSecondLayOutWidth] = useState('full');

    /**
     * Parsing data from get request
     * @param { Data[] } data
     * @returns { ParsedData[] }
     */
    const dataParser = (data: Data[]): ParsedData[] =>
        data.map((item: Data) => {
            const {
                capital,
                currencies = {},
                name,
                region,
                flags,
                population,
            } = item;

            const currency = Object.values(currencies)?.[0]?.name;
            return {
                name: name?.common,
                region,
                flag: flags.png,
                capital: capital?.[0],
                population,
                currency,
            };
        });

    return (
        <div
            className={clsx(
                'flex',
                'flex-col',
                'gap-2',
                'items-center',
                'text-center',
                'p-2',
                'lg:p-10'
            )}
        >
            <h2
                className={clsx(
                    'leading-normal',
                    'text-3xl',
                    'xl:text-4xl',
                    'xl:leading-normal',
                    'text-black'
                )}
            >
                List Component Example
            </h2>

            {/* First Layout */}
            <Layout
                className={clsx(
                    'py-0',
                    'py-6',
                    'sm:px-6',
                    'flex',
                    'justify-center',
                    'sm:py-6',
                    'max-w-full'
                )}
            >
                <div
                    className={clsx(
                        'flex',
                        'flex-col',
                        'gap-2',
                        'items-center',
                        'max-w-full'
                    )}
                >
                    <div className={clsx('flex', 'gap-2')}>
                        {buttons.map((button, index) => (
                            <Button
                                onClick={() => setLayOutWidth(button)}
                                key={index}
                            >
                                {button}
                            </Button>
                        ))}
                    </div>
                    <List
                        columns={[
                            { head: 'Id', dataItem: 'id' },
                            { head: 'Name', dataItem: 'name' },
                            { head: 'User Name', dataItem: 'username' },
                            { head: 'Email', dataItem: 'email' },
                            { head: 'Phone', dataItem: 'phone' },
                        ]}
                        uniqueField={'id'}
                        path={'https://jsonplaceholder.typicode.com/users'}
                        className={
                            layOutWidth === '25%'
                                ? 'w-1/4'
                                : layOutWidth === '50%'
                                  ? 'w-2/4'
                                  : layOutWidth === '75%'
                                    ? 'w-3/4'
                                    : 'w-fill'
                        }
                        queryKey={'usersData'}
                    />
                </div>
            </Layout>

            {/* Second Layout */}
            <Layout
                className={clsx(
                    'py-0',
                    'py-6',
                    'sm:px-6',
                    'flex',
                    'justify-center',
                    'sm:py-6',
                    'max-w-full'
                )}
            >
                <div
                    className={clsx(
                        'flex',
                        'flex-col',
                        'gap-2',
                        'items-center',
                        'max-w-full'
                    )}
                >
                    <div className={clsx('flex', 'gap-2')}>
                        {buttons.map((button, index) => (
                            <Button
                                onClick={() => setSecondLayOutWidth(button)}
                                key={index}
                            >
                                {button}
                            </Button>
                        ))}
                    </div>
                    <List
                        columns={[
                            {
                                head: 'Flag',
                                dataItem: 'flag',
                                cellType: 'image',
                            },
                            { head: 'Name', dataItem: 'name' },
                            { head: 'Capital', dataItem: 'capital' },
                            {
                                head: 'Region',
                                dataItem: 'region',
                            },
                            { head: 'Population', dataItem: 'population' },
                            { head: 'currency', dataItem: 'currency' },
                        ]}
                        uniqueField={'name'}
                        path={'https://restcountries.com/v3.1/all'}
                        dataParser={dataParser}
                        className={
                            secondLayOutWidth === '25%'
                                ? 'w-1/4'
                                : secondLayOutWidth === '50%'
                                  ? 'w-2/4'
                                  : secondLayOutWidth === '75%'
                                    ? 'w-3/4'
                                    : 'w-fill'
                        }
                        queryKey={'countriesData'}
                    />
                </div>
            </Layout>
        </div>
    );
};
