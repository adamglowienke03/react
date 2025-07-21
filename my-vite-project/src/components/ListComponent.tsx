export function ListComponent({listItems}) {
    return (
        <ul>
            {listItems.map((item, index) => (
                <li key={index}>
                    <a href={item.link}>{item.name}</a>
                </li>
            ))}
        </ul>
    );
}