import React from 'react';

const Sites = (props) => {
    return (
        <div>
            <table className="striped">
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
                            <td><button className="btn" name="Edit">Edit</button></td>
                            <td><button className="btn" name="Edit">Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Sites;