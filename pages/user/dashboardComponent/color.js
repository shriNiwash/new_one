import Head from "next/head";
import Image from "next/image";

const Color = () => {
    return(<>
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />

    </Head>

    <div class="container">
    <div class="page-head">
      <h4 class="page-tittle"> Color Settings</h4>
      <ul class="page-subdomain">
        <li><a href=""><i class="fa fa-home"></i></a></li>
        <li><i class="fa fa-chevron-right"></i></li>
        <li> User</li>
        <li><i class="fa fa-chevron-right"></i></li>
        <li>  Logo</li>
      </ul>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <div class="subdomain">
          <h4 class="subdomain-head">Color Settings</h4>
          <div class="container">
            <div class="row">
              <div class="col-lg-4 setting-form">
                <div class="col-12 mb-2 image-setting">
                    <label for="exampleColorInput" class="form-label">Base Color</label>
                    <input type="text" class="form-control jscolor" name="base_color" value="FF3737"
                    id="exampleColorInput" autocomplete="off"/>                </div>
            </div>
          </div>
          <div class="color-card">
            <div class="row">
                <div class="col-12  color-footer">
                    <button type="submit" id="submitbtn" class="btn btn-success button-type">Update</button>
                </div>
            </div>
          </div>
      </div>
        </div>

      </div>
    </div>
  </div>
  <footer class="footer-type">
    <div class="container-fluid">
      <div class="setting-footer">Copyright © 2021. All rights reserved by Sasso.</div>
    </div>
  </footer>
    </>)
}
export default Color;