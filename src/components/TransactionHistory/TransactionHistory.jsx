import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
    const rows = items.map((item) => {
        return (
            <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>
        );
    });

    return (
        <table className={css.transationHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>{rows}</tbody>
        </table>
    );
}
