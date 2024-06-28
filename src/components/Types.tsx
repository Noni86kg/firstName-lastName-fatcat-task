export interface RenderForm {
    register: Function;
    errors?: {
        [key: string]: {
            message: string;
        };
    };
    onSubmit?: React.MouseEventHandler<HTMLButtonElement>;
    isValid?: boolean;
    isSubmitting?: boolean;
    isLoading?: boolean;
    isError?: boolean;
    successMessage?: string;
}

export interface DynamicLayout {
    breakpoint: 'sm' | 'md' | 'lg' | 'xl';
    changeDirection?: boolean;
    reverse?: boolean;
}
