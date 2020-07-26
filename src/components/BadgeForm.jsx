import React from 'react';

const BadgeForm = ({ onSubmit, onChange }) => {

    var elementsForm = {};

    // var [ elementsForm, setElementsForm ] = React.useState(elementsForm);

    // const handleChange = e => {
    //     const name = e.target.name;
    //     const value = e.target.value;

    //     setElementsForm(elementsForm => ({ ...elementsForm, [name]: value}));
        
    // };

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

            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                    onChange={onChange}
                    className="form-control"
                    type="text"
                    name="firstName"
                    value={elementsForm.firstName}
                    />
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input
                    onChange={onChange}
                    className="form-control"
                    type="text"
                    name="lastName"
                    value={elementsForm.lastName}
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                    onChange={onChange}
                    className="form-control"
                    type="email"
                    name="email"
                    value={elementsForm.email}
                    />
                </div>

                <div className="form-group">
                    <label>Job title</label>
                    <input
                    onChange={onChange}
                    className="form-control"
                    type="text"
                    name="jobTitle"
                    value={elementsForm.jobTitle}
                    />
                </div>

                <div className="form-group">
                    <label>Twitter</label>
                    <input
                    onChange={onChange}
                    className="form-control"
                    type="text"
                    name="twitter"
                    value={elementsForm.twitter}
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