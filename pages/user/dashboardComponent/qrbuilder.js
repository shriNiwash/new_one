import QRCode from "qrcode";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const Qrbuilder = () => {
    const [size,setSize] = useState(400);
    const [color, setColor] = useColor("hex", "#121212");
    const [url, setUrl] = useState('https://profilo.xyz/Romario');
    const [qrcode, setQrcode] = useState('');

    const GenerateQRcode = ()=>{
        QRCode.toDataURL(url,{
            width: 800,
            margin: 2,
            color:{
                dark: color.hex
            }

        },(err,data)=>{
            if(err) return console.log(err)
            console.log(data);
            setQrcode(data);

        })

    }
    console.log(color.hex);
    return (<>
        <Head>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
            <title>Profilex - User Service</title>
        </Head>
    <div className="page_header">
      <h4 className="table_h4">QR Code Builder</h4>
      <ul className="table_ul">
        <li className="home_font"><a href=""><i className="fa fa-home"></i></a></li>
        <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
        <li className="home_datas"><a>QR Code Builder</a></li>
        <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
        <li className="home_datas"><a href="">QR Code Builder</a></li>
      </ul>
    </div>
        <div className="row">
            <div className="col-lg-7">
                <div className="table_card">
                    <div className="table_header">
                        <div className="table_title d-inline-block">QRBuilder</div>
                        <div className="mt-5">
                            <label htmlFor="exampleInputEmail1" className="form-label">URL **</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={url}
                            onChange={(evt) => setUrl(evt.target.value)}
                             placeholder="https://profilo.xyz/Romario" />
                            <div id="emailHelp" className="form-text text-warning">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="exampleInputEmail1" className="form-label">Color</label>
                            <ColorPicker className="form-control" width={456} height={200}
                                color={color}
                                onChange={setColor}  dark />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="exampleInputEmail1" className="form-label">Size</label>
                            <input type="range" className="form-control p-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                                min={200} value={size} onChange={(e)=>setSize(e.target.value)}  max={350}  />
                        </div>
                        <div className="mt-5">
                            <button className="btn btn-success" onClick={GenerateQRcode}>GenerateQr</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="table_card">
                    <div className="table_header">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="table_title d-inline-block">QRBuilder</div>
                            </div>
                            <div className="col-lg-4 offset-lg-1 mt-lg-0 float-right">
                                <button className="btn btn-success float-right" >Save</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body text-center py-5">
                        <div className="p-3 border-rounded d-inline-block">
                           
                                <Image src={qrcode ? qrcode : '/dashboard/qr/qrcode.png'} height={size} width={size} alt="qr" />
                        </div>
                    </div>
                    <div className="table_footer">
                        <a className="btn btn-primary" href={qrcode} download="qrcode.png">Download</a>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Qrbuilder;