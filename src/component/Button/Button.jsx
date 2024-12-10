import "./Button.css"

export default function Button( {onClick, isActive, className, children, style} ) {
    return (
        <button 
            className={`${className} ${isActive ? "active" : ""}`.trim()}
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    )
}