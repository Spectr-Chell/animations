import "./DivBlocks.css"

export default function DivBlockInfo( { className, style, children } ) {
    return (
        <div className={className} style={style}>{children}</div>
    )
} 