import "./DivBlocks.css"

export default function DivBlockOptionBasic( { className, style, children } ) {
    return (
        <div 
            className={className} 
            style={style}
        >
            {children}
        </div>
    )
}