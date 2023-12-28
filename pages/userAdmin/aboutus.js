import Head from "next/head";
import Layoutimage from "../userAdminComponent/Layoutimage";

const aboutus = () => {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
        <title>Profilex - Admin User</title>
      </Head>
      <section>
        <div>
          <Layoutimage Layoutitle="About Us" hometitle={"About Us"} />
        </div>
        <div className="container">
          <div className="latter">
            <p style={{ lineHeight: "2" }}>
              <span style={{ fontSize: "18px", color: "#565872" }}>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not
                know how to pursue pleasure rationally encounter consequences
                that are extremely painful. Nor again is there anyone who loves
                or pursues or desires to obtain pain of itself, because it is
                pain, but because occasionally circumstances occur in which toil
                and pain can procure him some great pleasure. To take a trivial
                example, which of us ever undertakes laborious physical
                exercise, except to obtain some advantage from it? But who has
                any right to find fault with a man who chooses to enjoy <br />
                <br />a pleasure that has no annoying consequences, or one who
                avoids a pain that produces no resultant pleasure But I must
                explain to you how all this mistaken idea of denouncing pleasure
                and praising pain was born and I will give you a complete
                account of the system, and expound the actual teachings of the
                great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure, but because those who do not know how to
                pursue pleasure rationally encounter consequences that are
                extremely painful. Nor again is there anyone who loves or
                pursues or desires to obtain pain of itself, because it is pain,
                but because occasionally circumstances occur in which toil and
                pain can procure him some great pleasure. To take a trivial
                example, which of us ever undertakes laborious physical
                exercise, except to obtain some advantage from it? But who has
                any right to find fault with a man who chooses to enjoy a
                pleasure that has no annoying consequences, or one who avoids a
                pain that produces no resultant pleasure
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default aboutus;
