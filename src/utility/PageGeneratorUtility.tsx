import { DynamicLayout } from '../components/Types';
import {
    Button,
    Cards,
    Hero,
    ItemsShowcase,
    Layout,
    List,
    PanelShowcase,
    TrustBar,
    FormGenerator,
    InputField,
    TextArea,
    SubmitButton,
    PageGenerator,
    HBox,
    VBox,
} from '@/components';
import { CgAlarm } from 'react-icons/cg';

/**
 * Function to dynamically return JSX elements based on tag name
 * @param {string} tag
 * @returns {JSX.Element}
 */
export const handleComponentTag = (tag: string): JSX.Element => {
    switch (tag) {
        case 'Button':
            return <Button />;
        case 'Cards':
            return <Cards cards={[]} />;
        case 'Hero':
            return <Hero title={''} image={''} />;
        case 'ItemsShowcase':
            return <ItemsShowcase items={[]} />;
        case 'Layout':
            return <Layout children={''} />;
        case 'List':
            return <List path={''} columns={[]} uniqueField={''} />;
        case 'PanelShowcase':
            return <PanelShowcase items={[]} />;
        case 'TrustBar':
            return <TrustBar images={[]} />;
        case 'FormGenerator':
            return (
                <FormGenerator
                    renderForm={() => {}}
                    validationSchema={{}}
                    postDataRequest={''}
                />
            );
        case 'InputField':
            return <InputField label={''} />;
        case 'TextArea':
            return <TextArea label={''} />;
        case 'SubmitButton':
            return <SubmitButton />;
        case 'PageGenerator':
            return <PageGenerator data={[]} />;
        case 'HBox':
            return <HBox />;
        case 'VBox':
            return <VBox />;
        case 'CgAlarm':
            return <CgAlarm />;
        default:
            return <></>;
    }
};

/**
 * Array listing all available component types
 */
export const allComponents = [
    'Button',
    'Cards',
    'Hero',
    'ItemsShowcase',
    'Layout',
    'List',
    'PanelShowcase',
    'TrustBar',
    'FormGenerator',
    'InputField',
    'TextArea',
    'SubmitButton',
    'PageGenerator',
    'HBox',
    'VBox',
    'Layout',
    'CgAlarm',
];

/**
 * Breakpoints for dynamic layout handling
 */
const breakpoints = ['sm', 'md', 'lg', 'xl'];

/**
 * Class names corresponding to different layout directions and reversals for each breakpoint
 */
const classNames = [
    [
        'sm:flex-col',
        'sm:flex-row',
        'sm:flex-col-reverse',
        'sm:flex-row-reverse',
    ],
    [
        'md:flex-col',
        'md:flex-row',
        'md:flex-col-reverse',
        'md:flex-row-reverse',
    ],
    [
        'lg:flex-col',
        'lg:flex-row',
        'lg:flex-col-reverse',
        'lg:flex-row-reverse',
    ],
    [
        'xl:flex-col',
        'xl:flex-row',
        'xl:flex-col-reverse',
        'xl:flex-row-reverse',
    ],
];

/**
 * Function to handle dynamic layout based on type and configuration
 * @param {string} type
 * @param {DynamicLayout} dynamicLayout
 * @param {string} className
 * @returns {string}
 */
export const handleDynamicLayout = (
    type: string,
    dynamicLayout: DynamicLayout,
    className: string = ''
): string => {
    const { breakpoint, changeDirection, reverse } = dynamicLayout;

    // Determine index of the breakpoint in the breakpoints array
    const indexOfBrakPoint = breakpoints.indexOf(breakpoint);

    // Determine index for class names based on type, changeDirection, and reverse
    let index =
        type === 'HBox' ? (changeDirection ? 0 : 1) : changeDirection ? 1 : 0;

    index = reverse ? index + 2 : index;

    return className + ' ' + classNames[indexOfBrakPoint][index];
};
