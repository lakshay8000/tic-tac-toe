import "./cell.css";

function Cell({cellValue, idx, handleClick}) {
    return (
        <div 
            onClick={e => handleClick(e, idx)}    
            className="cell-box d-flex justify-content-center align-items-center"
        >
            {cellValue}
        </div>
    )
}

export default Cell;