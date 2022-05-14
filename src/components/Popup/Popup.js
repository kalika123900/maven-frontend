import React from 'react'

export default function Popup() {
  return (
     <>
        <div className="popup">
            <div className='popUpinfo'>
                <div className="row">
                    <div className="col-md-6">
                        <div class="mb-3">
                          <label for=" ">Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="mb-3">
                        <label for=" ">Username</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Username"/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div class="mb-3">
                        <label for=" ">  RTMP URL</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=" rtmp://rtmp.livepeer.com/live  "/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div class="mb-3">
                        <label for=" ">   Streamer Key</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="9a05-dt5b-0g0u-osxx"/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div class="mb-3">
                        <label for=" ">   Live URL</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Live URL"/>
                        </div>
                    </div>
                    <div className='col-md-6 thum'>
                            <h1>Thumbnail</h1>
                            <div>
                                <input type='file'></input>
                                <button>Upload</button>
                            </div>
                    </div>
                    <div className='col-md-6'>
                            <div className="preview">
                                <span><img src={require('../../img/Play.png')} alt="" /></span>
                            </div>
                    </div>

                    <div className="col-md-12">
                        <button className='goLIvebtn'>GO LIVE</button>
                    </div>
                    <div className="col-md-12">
                        <button className='goLIvebtn multiStream'>Add MultiStream Platforms</button>
                    </div>
                </div>
            </div>
        </div>
     </>
  )
}
