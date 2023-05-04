import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mr. and Mrs. CS Khadar Basha</h2>

                <h5 className="address mb-3">
                    Residence: Near Inanshah Vali Dargah, Havanapet,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> Andhra Pradesh - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    {/* +91 95332 36600, <br /> */}
                    +91 83283 34796.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
