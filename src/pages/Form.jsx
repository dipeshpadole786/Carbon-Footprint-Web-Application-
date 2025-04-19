import React from 'react'

export const Form = () => {
    return (
        <div>
            <div className="container-fluid d-flex justify-content-center " style={{ height: '800px' }}>
                <div className="col-12 col-md-6 col-lg-4">
                    <form>
                        <div className="form-group">
                            <hr />
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                            <hr />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail2">Contact Number</label>
                            <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Enter email" />
                            <hr />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail3">Whatsapp Number</label>
                            <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Enter email" />
                            <hr />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail4">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail4" placeholder="Enter email" />
                            <hr />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            <hr />
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>

                        <button type="submit" className="btn btn-primary mt-3">Send Information</button>
                        <hr />
                    </form>
                </div>
            </div>
        </div>
    )
}
