import "./DivBlocks.css"

export default function DivBlockInfo( { className, style, children, id } ) {
    return (
        <div className={className} id={id} style={style}>{children}</div>
    )
} 