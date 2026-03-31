import "@/components/home/InputBox.css"

interface InputBoxProps {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    onEnter?: () => void;
}

function InputBox({ value, placeholder, disabled, size = 'medium', onEnter }: InputBoxProps) {
    return (
        <input
            aria-multiline="true"
            value={value}
            className={size == 'large' ? "inputbox-large" : size == 'medium' ? "inputbox-medium" : "inputbox-small"}
            disabled={disabled}
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    onEnter?.();
                }
            }}
            placeholder={placeholder}
        />
    )
}

export default InputBox;