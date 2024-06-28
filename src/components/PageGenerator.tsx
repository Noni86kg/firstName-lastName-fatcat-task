import { cloneElement, createElement } from 'react';
import {
    allComponents,
    handleComponentTag,
    handleDynamicLayout,
} from '../utility/PageGeneratorUtility';
import { isUndefined, isArray, isString, isEmpty, cloneDeep } from 'lodash';
import { DynamicLayout } from './Types';

type Layouts = 'HBox' | 'VBox' | 'Layout';

type Components =
    | 'Button'
    | 'Cards'
    | 'Hero'
    | 'ItemsShowcase'
    | 'Layout'
    | 'List'
    | 'PanelShowcase'
    | 'TrustBar'
    | 'FormGenerator'
    | 'InputField'
    | 'TextArea'
    | 'SubmitButton'
    | 'PageGenerator'
    | 'HBox'
    | 'VBox'
    | 'CgAlarm'
    | keyof JSX.IntrinsicElements;

type Props = {
    [key: string]: string | boolean | { [key: string]: string | boolean };
};

type Children =
    | {
          type: Components;
          props?: Props;
          children?:
              | Children[]
              | [Children, string]
              | [string, Children]
              | string;
      }
    | string;

interface Data {
    type: Layouts;
    props?: Props;
    components?: Children[];
}

interface NewData {
    type: Components;
    props?: Props;
    children?: Children[];
    dynamicLayout?: DynamicLayout;
}

interface PageGeneratorProps {
    data: Data[];
    dynamicLayout?: DynamicLayout[];
}

export const PageGenerator = ({ data, dynamicLayout }: PageGeneratorProps) => {
    /**
     * Function to create components based on provided data
     * @param {NewData} item
     * @returns {JSX.Element}
     */
    const createComponent = (item: NewData): JSX.Element => {
        let { type, props = {}, children, dynamicLayout } = item;
        const componentProps = cloneDeep(props);

        if (
            !isUndefined(children) &&
            isArray(children) &&
            children.length > 0
        ) {
            children = children.map((child) =>
                isString(child) ? child : createComponent(child as NewData)
            );
        } else if (isString(children)) {
            children = [children];
        } else if (isUndefined(children)) {
            children = [];
        }

        const isCustomComponent = allComponents.includes(type);

        if (!isUndefined(dynamicLayout)) {
            const { className } = componentProps;

            componentProps.className = handleDynamicLayout(
                type,
                dynamicLayout,
                className as string | undefined
            );
        }

        if (isCustomComponent) {
            return cloneElement(
                handleComponentTag(type),
                componentProps,
                ...(children as [])
            );
        } else {
            return createElement(type, componentProps, ...(children as []));
        }
    };

    return (
        <section>
            {...data?.map((item: Data, index) => {
                const { type, props, components } = item;
                const data = {
                    type,
                    props,
                    children: components,
                } as NewData;

                if (
                    !isUndefined(dynamicLayout?.[index]) &&
                    !isEmpty(dynamicLayout[index])
                ) {
                    data['dynamicLayout'] = dynamicLayout[index];
                }

                return createComponent(data);
            })}
        </section>
    );
};
