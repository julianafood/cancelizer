import React from 'react';

const inputPage = () => (
 <div Background="Background.jpg">

<div className="panel panel-default" style="color:aliceblue">
      <div calss="panel-heading">
            <h3 className="panel-title" style="text-align:center">Subscription Input</h3>
      </div>
      <div className="panel-body">
            <div className="container">
                  <div className="row">
                        <div className="col-md-12">
                              <form action="" method="POST" role="form">
                                    <legend style="text-align:center">Submitmit Your subscription Data</legend>
                        </div>
                  </div>
                  <br />
                  <div className="row">
                        <div className="form-group" style="color: aliceblue"></div>
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-2">
                              <label for="">Provider</label>
                              <input type="text" className="form-control-transparent" id="providerInput"
                                    placeholder="Input Provider" />
                        </div>
                        <div className="col-md-2">
                              <label for="">Date Submitted</label>
                              <input type="text" className="form-control-transparent" id="sDateInput"
                                    placeholder="Date Submitted" />
                        </div>
                        <div className="col-md-2">
                              <label for="">Days of Trial</label>
                              <input type="text" className="form-control-transparent" id="daysLeftInput"
                                    placeholder="Days of Trial" />
                        </div>
                        <div className="col-md-3">
                              </div>
                  </div>

                  <br />
                  <div className="row">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-2">
                              <button type="submit" className="btn btn-outline-secondary" id="sButton">Submit</button>
                        </div>
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-3">
                        </div>
                  </div>
                  </form>
            </div>
      </div>

</div>
</div>

<br />








      <div className="panel panel-default" style="color:aliceblue">
            <div className="panel-body">
                  Active Subscriptions
            </div>

            <table className="table table-bordered table-hover" id="subTable" style="color: aliceblue">
                  <thead>
                        <tr>
                              <th style="padding-right:150px;">Provider</th>
                              <th style="padding-right:150px;">Date Submitted</th>
                              <th style="padding-right:150px;">Expriration Date</th>
                        </tr>
                  </thead>
                  <tbody>
                  </tbody>
            </table>

      </div>


)

export default inputPage

