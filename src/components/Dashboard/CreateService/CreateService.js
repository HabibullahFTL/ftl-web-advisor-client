import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import { fileUploadHandle } from '../../Login/LoginManager';

const CreateService = () => {
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
    const [serviceInfo, setServiceInfo] = useState({
        isSuccess: false,
        serviceTitle: '',
        serviceDescription: '',
        serviceFee: '',
        thumbnailDir: '',
        thumbnailFile: '',
        message: ''
    });

    const handleAddService = () => {
        const { serviceTitle, serviceDescription, serviceFee, thumbnailFile, thumbnailDir } = serviceInfo;
        fileUploadHandle(thumbnailFile, thumbnailDir, { serviceTitle, serviceDescription, serviceFee, createdBy : loginUserDetails.email })
            .then(data => {
                if (!data.message) {
                    delete data.message;
                    fetch('https://nameless-fjord-98328.herokuapp.com/create-service', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                        .then(response => response.json())
                        .then(serviceData => {
                            if (!serviceData.message) {
                                // For showing success aleart
                                const newServiceInfo = { ...serviceData };
                                newServiceInfo.isSuccess = true;
                                setServiceInfo(newServiceInfo);
                                document.getElementById('serviceTitle').value = "";
                                document.getElementById('serviceDescription').value = "";
                                document.getElementById('serviceFee').value = "";
                                document.getElementById('servicePhoto').value = "";
                            }
                        })
                } else {
                    // For updating failed message
                    const newServiceInfo = { ...serviceInfo };
                    newServiceInfo.message = data.message;
                    setServiceInfo(newServiceInfo);
                }
            })
    }

    const handleServDataChange = (e) => {
        const dataTarget = e.target;
        if (dataTarget.id === 'serviceTitle') {
            const newServInfo = { ...serviceInfo };
            newServInfo.serviceTitle = dataTarget.value;
            setServiceInfo(newServInfo);
        }
        if (dataTarget.id === 'serviceDescription') {
            const newServInfo = { ...serviceInfo };
            newServInfo.serviceDescription = dataTarget.value;
            setServiceInfo(newServInfo);
        }
        if (dataTarget.id === 'serviceFee') {
            const newServInfo = { ...serviceInfo };
            newServInfo.serviceFee = dataTarget.value;
            setServiceInfo(newServInfo);
        }
        if (dataTarget.id === 'servicePhoto') {
            const date = new Date();
            const presentTime = date.getTime();
            const newServInfo = { ...serviceInfo };
            newServInfo.thumbnailFile = dataTarget.files[0];
            newServInfo.thumbnailDir = 'service-thumbnails/' + presentTime + '_' + e.target.files[0].name;
            setServiceInfo(newServInfo)
        }
    }

    return (
        <div className="row">
            <div className="col-12">
                {
                    serviceInfo.message && !serviceInfo.isSuccess && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        {serviceInfo.message}
                    </div>
                }
                {
                    serviceInfo.isSuccess && <div className="alert alert-success alert-dismissible fade show" role="alert">
                        Service created successfully!
                                    </div>
                }
            </div>
            <div className="col-md-6">
                <div class="mb-3">
                    <label htmlFor="serviceTitle" class="form-label">Service Title</label>
                    <input type="text" class="form-control" id="serviceTitle" onChange={handleServDataChange} />
                </div>
                <div class="mb-3">
                    <label htmlFor="serviceDescription" class="form-label">Description</label>
                    <textarea class="form-control" id="serviceDescription" onChange={handleServDataChange} ></textarea>
                </div>
            </div>
            <div className="col-md-6">
                <div class="mb-3">
                    <label htmlFor="serviceFee" class="form-label">Service Fee</label>
                    <input type="number" class="form-control" id="serviceFee" onChange={handleServDataChange} />
                </div>
                <div class="mb-3">
                    <label htmlFor="servicePhoto" class="form-label">Image</label>
                    <input type="file" class="form-control" id="servicePhoto" onChange={handleServDataChange} />
                </div>
            </div>
            <div className="col-12 text-center">
                <button className="btn btn-purple px-5 btn-md" onClick={handleAddService}>Add Service</button>
            </div>
        </div>
    );
};

export default CreateService;