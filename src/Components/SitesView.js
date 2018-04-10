import React from 'react';
import {Link} from 'react-router-dom';

const Panel = (props) => {
    return (
        <div>
            <table className="striped responsive-table">
                <thead>
                    <tr>
                        <th>Full Link</th>
                        <th>Shortcut</th>
                        <th>Expiry Date</th>
                        <th>Working</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {props.data.map( item =>
                        <tr key={item.full_link.toString()}>
                            <td>{item.full_link}</td>
                            <td>{item.short_link}</td>
                            <td>{item.expiry_date}</td>
                            <td>{item.working.toString()}</td>
                            <td><Link to={"/edit/" + item.full_link} className="btn">Edit</Link></td>
                            <td><Link to={"/delete/" + item.full_link} className="btn">Delete</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Panel;