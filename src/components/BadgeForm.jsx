import React from 'react';

const BadgeForm = () => {

    const handleChange = e => {
        console.log({
        name: e.target.name,
        value: e.target.value,
        });
    };

    const handleClick = e => {
        console.log('Button was clicked');
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submitted');
    };

    return (
        <div>
            <h1>New Attendant</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    name="firstName"
                    />
                </div>

                <button onClick={handleClick} className="btn btn-primary">
                    Save
                </button>
            </form>
        </div>
    );
}

export default BadgeForm;