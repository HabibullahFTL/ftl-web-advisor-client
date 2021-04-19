import React from 'react';

const AddAdmin = () => {
    return (
        <div className="row mt-5">
            <div className="col-md-8">
                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Email Address" />
                </div>
            </div>
            <div className="col-md-4">
                <button className="btn btn-purple px-5 btn-md">Add As Admin</button>
            </div>
        </div>
    );
};

export default AddAdmin;