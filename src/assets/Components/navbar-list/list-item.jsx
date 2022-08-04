export default function Listitem(props){
    return(
        <div>
            <li className={props.style}> 
                {props.text}
            </li>
        </div>
    )
}

Listitem.defaultProps = {
    style: "text-2xl cursor-pointer"
}