import "./DivBlocks.css"

export default function TurnDiv( {children, style} ) {
    return (
        <div className="TurnCirlce" style={style}>{children}</div>
    )
}