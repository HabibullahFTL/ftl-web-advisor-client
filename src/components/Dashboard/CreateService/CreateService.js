import React from 'react';

const CreateService = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <div class="mb-3">
                    <label htmlFor="serviceTitle" class="form-label">Service Title</label>
                    <input type="text" class="form-control" id="serviceTitle" />
                </div>
                <div class="mb-3">
                    <label htmlFor="serviceDescription" class="form-label">Description</label>
                    <textarea class="form-control" id="serviceDescription" ></textarea>
                </div>
            </div>
            <div className="col-md-6">
                <div class="mb-3">
                    <label htmlFor="servicePhoto" class="form-label">Image</label>
                    <input type="file" class="form-control" id="servicePhoto" />
                </div>
            </div>
            <div className="col-12 text-center">
                <button className="btn btn-purple px-5 btn-md">Add Service</button>
            </div>
        </div>
    );
};

export default CreateService;