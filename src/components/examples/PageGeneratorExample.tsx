import clsx from 'clsx';
import { PageGenerator } from '@/components';

export const PageGeneratorExample = () => {
    return (
        <div
            className={clsx(
                'flex',
                'flex-col',
                'gap-2',
                'items-center',
                'p-10'
            )}
        >
            <h2
                className={clsx(
                    'leading-normal',
                    'text-3xl',
                    'D:text-4xl',
                    'xl:leading-normal',
                    'text-black'
                )}
            >
                Page Generator Component Example
            </h2>
            <PageGenerator
                dynamicLayout={[
                    { breakpoint: 'lg', changeDirection: true },
                    { breakpoint: 'xl', changeDirection: true, reverse: true },
                ]}
                data={[
                    {
                        type: 'VBox',
                        props: {
                            className:
                                'gap-7 bg-primary w-full p-20 rounded my-10 text-white',
                        },
                        components: [
                            {
                                type: 'VBox',
                                props: {
                                    className: 'gap-5 justify-center flex-1',
                                },
                                children: [
                                    {
                                        type: 'h1',
                                        props: {
                                            className:
                                                'leading-normal text-4xl font-bold',
                                        },
                                        children:
                                            'Learn to code by watching others',
                                    },
                                    {
                                        type: 'p',
                                        props: {
                                            className: 'text-sm',
                                        },
                                        children:
                                            'See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable',
                                    },
                                ],
                            },
                            {
                                type: 'VBox',
                                props: {
                                    className: 'gap-4 justify-center flex-1',
                                },
                                children: [
                                    {
                                        type: 'div',
                                        props: {
                                            className:
                                                'bg-green rounded p-5 shadow-lg shadow-gray80',
                                        },
                                        children: [
                                            {
                                                type: 'p',
                                                children: [
                                                    {
                                                        type: 'span',
                                                        props: {
                                                            className:
                                                                'font-bold',
                                                        },
                                                        children:
                                                            'Try it free 7 days ',
                                                    },
                                                    'then $20/mo. thereafter',
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'VBox',
                                        props: {
                                            className:
                                                'gap-2 rounded px-5 py-10 bg-gray40 text-black shadow-lg shadow-gray80',
                                        },
                                        children: [
                                            {
                                                type: 'InputField',
                                                props: {
                                                    label: 'First Name',
                                                    required: true,
                                                },
                                            },
                                            {
                                                type: 'InputField',
                                                props: {
                                                    label: 'Last Name',
                                                    required: true,
                                                },
                                            },
                                            {
                                                type: 'InputField',
                                                props: {
                                                    label: 'Email',
                                                    required: true,
                                                },
                                            },
                                            {
                                                type: 'InputField',
                                                props: {
                                                    label: 'Password',
                                                    required: true,
                                                },
                                            },
                                            {
                                                type: 'Button',
                                                props: {
                                                    className:
                                                        'font-bold text-sm tracking-wider flex justify-center items-center gap-2',
                                                },
                                                children: [
                                                    'CLAIM YOUR FREE TRIAL',
                                                    {
                                                        type: 'CgAlarm',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    // second example
                    {
                        type: 'VBox',
                        props: {
                            className:
                                'gap-5 bg-cream w-full p-20 rounded my-10 text-black',
                        },
                        components: [
                            {
                                type: 'VBox',
                                props: {
                                    className:
                                        'flex-1 bg-tertiaryYellow rounded-lg p-10 gap-5',
                                },
                                children: [
                                    {
                                        type: 'HBox',
                                        props: {
                                            className: 'gap-2 items-center',
                                        },
                                        children: [
                                            {
                                                type: 'img',
                                                props: {
                                                    src: 'daniel.jpg',
                                                    className:
                                                        'rounded-full border-4 border-green',
                                                },
                                            },
                                            {
                                                type: 'VBox',
                                                children: [
                                                    {
                                                        type: 'h4',
                                                        props: {
                                                            className:
                                                                'font-bold',
                                                        },
                                                        children:
                                                            'Daniel Clifford',
                                                    },
                                                    {
                                                        type: 'p',
                                                        children:
                                                            'Verified Graduate',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'p',
                                        props: { className: 'font-bold' },
                                        children: `I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.`,
                                    },
                                    {
                                        type: 'p',
                                        children: `"I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free into course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup."`,
                                    },
                                ],
                            },
                            {
                                type: 'VBox',
                                props: {
                                    className:
                                        'flex-1 bg-mainGreen rounded-lg p-10 gap-5',
                                },
                                children: [
                                    {
                                        type: 'HBox',
                                        props: {
                                            className: 'gap-2 items-center',
                                        },
                                        children: [
                                            {
                                                type: 'img',
                                                props: {
                                                    src: 'jeanette.jpg',
                                                    className:
                                                        'rounded-full border-4 border-primary',
                                                },
                                            },
                                            {
                                                type: 'VBox',
                                                children: [
                                                    {
                                                        type: 'h4',
                                                        props: {
                                                            className:
                                                                'font-bold',
                                                        },
                                                        children:
                                                            'Jeanette Harmon',
                                                    },
                                                    {
                                                        type: 'p',
                                                        children:
                                                            'Verified Graduate',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'p',
                                        props: { className: 'font-bold' },
                                        children: `An overall wonderful and rewarding experience`,
                                    },
                                    {
                                        type: 'p',
                                        children: `"Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."`,
                                    },
                                ],
                            },
                            {
                                type: 'VBox',
                                props: {
                                    className:
                                        'flex-1 bg-primary rounded-lg p-10 gap-5',
                                },
                                children: [
                                    {
                                        type: 'HBox',
                                        props: {
                                            className: 'gap-2 items-center',
                                        },
                                        children: [
                                            {
                                                type: 'img',
                                                props: {
                                                    src: 'jonathan.jpg',
                                                    className:
                                                        'rounded-full border-4 border-purple',
                                                },
                                            },
                                            {
                                                type: 'VBox',
                                                children: [
                                                    {
                                                        type: 'h4',
                                                        props: {
                                                            className:
                                                                'font-bold',
                                                        },
                                                        children:
                                                            'Jonathan Walters',
                                                    },
                                                    {
                                                        type: 'p',
                                                        children:
                                                            'Verified Graduate',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'p',
                                        props: { className: 'font-bold' },
                                        children: `The team was very supportive and kept me motivated`,
                                    },
                                    {
                                        type: 'p',
                                        children: `"I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself."`,
                                    },
                                ],
                            },
                            {
                                type: 'VBox',
                                props: {
                                    className:
                                        'flex-1 bg-mainRed rounded-lg p-10 gap-5',
                                },
                                children: [
                                    {
                                        type: 'HBox',
                                        props: {
                                            className: 'gap-2 items-center',
                                        },
                                        children: [
                                            {
                                                type: 'img',
                                                props: {
                                                    src: 'patrick.jpg',
                                                    className:
                                                        'rounded-full border-4 border-mainYellow',
                                                },
                                            },
                                            {
                                                type: 'VBox',
                                                children: [
                                                    {
                                                        type: 'h4',
                                                        props: {
                                                            className:
                                                                'font-bold',
                                                        },
                                                        children:
                                                            'Patrick Abrams',
                                                    },
                                                    {
                                                        type: 'p',
                                                        children:
                                                            'Verified Graduate',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'p',
                                        props: { className: 'font-bold' },
                                        children: `Awesome teaching support from TAs who did the bootcamp themselves. Getting guadance from them and learning from their experiences was easy.`,
                                    },
                                    {
                                        type: 'p',
                                        children: `"The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."`,
                                    },
                                ],
                            },
                        ],
                    },
                ]}
            />
        </div>
    );
};
