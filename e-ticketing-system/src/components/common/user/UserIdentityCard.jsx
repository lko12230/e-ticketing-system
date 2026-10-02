import React, {
  useEffect,
  useState
} from "react";

import { createPortal } from "react-dom";

import {
  ShieldCheck,
  QrCode,
  X,
  CheckCircle2,
  ExternalLink,
  User,
  BriefcaseBusiness,
  Building2,
  Mail,
  Hash,
  BadgeCheck,
  Copy,
  Check
} from "lucide-react";

import { QRCodeSVG } from "qrcode.react";


function UserIdentityCard() {

  const [showQr, setShowQr] = useState(false);

  const [copied, setCopied] = useState(false);


  /* ============================================================
     USER PROFESSIONAL INFORMATION
  ============================================================ */

  const user = {

    employeeId: "EMP-10001",

    name: "Ayush Gupta",

    email: "ayush.gupta@example.com",

    department: "Customer Support",

    designation: "Support Executive",

    location: "Gurugram, India",

    joiningDate: "15 July 2022",

    manager: "Rahul Sharma",

    status: "Verified",

    employmentStatus: "Active"

  };


  /* ============================================================
     VERIFICATION URL

     Employee ID is used as the verification identifier.
  ============================================================ */

  const verificationUrl =
    `${window.location.origin}/verify/${user.employeeId}`;


  /* ============================================================
     FREEZE BACKGROUND
  ============================================================ */

  useEffect(() => {

    if (!showQr) {
      return;
    }

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {

      document.body.style.overflow =
        originalOverflow;

    };

  }, [showQr]);


  /* ============================================================
     ESCAPE KEY
  ============================================================ */

  useEffect(() => {

    if (!showQr) {
      return;
    }

    const handleEscape = (event) => {

      if (event.key === "Escape") {

        setShowQr(false);

      }

    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {

      document.removeEventListener(
        "keydown",
        handleEscape
      );

    };

  }, [showQr]);


  /* ============================================================
     COPY EMPLOYEE ID
  ============================================================ */

  const copyEmployeeId = async () => {

    try {

      await navigator.clipboard.writeText(
        user.employeeId
      );

      setCopied(true);

      setTimeout(() => {

        setCopied(false);

      }, 1500);

    } catch (error) {

      console.error(
        "Failed to copy Employee ID:",
        error
      );

    }

  };


  /* ============================================================
     OPEN VERIFICATION PAGE
  ============================================================ */

  const openVerificationPage = () => {

    window.open(
      verificationUrl,
      "_blank",
      "noopener,noreferrer"
    );

  };


  /* ============================================================
     QR MODAL
  ============================================================ */

  const qrModal = showQr ? (

    <div
      className="qr-modal-overlay"
      onClick={() => setShowQr(false)}
    >

      <div
        className="qr-modal"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        {/* ====================================================
            MODAL HEADER
        ==================================================== */}

        <div className="qr-modal-header">

          <div className="qr-modal-title-area">

            <div className="qr-modal-title-icon">

              <ShieldCheck size={21} />

            </div>

            <div>

              <h2>
                Employee Identity
              </h2>

              <p>
                Professional identity verification
              </p>

            </div>

          </div>


          <button
            type="button"
            className="qr-close-button"
            onClick={() => setShowQr(false)}
            aria-label="Close"
          >

            <X size={20} />

          </button>

        </div>


        {/* ====================================================
            PROFESSIONAL PROFILE
        ==================================================== */}

        <div className="qr-professional-profile">

          <div className="qr-professional-avatar">

            <span>
              AG
            </span>

            <div className="qr-avatar-verified">

              <CheckCircle2 size={12} />

            </div>

          </div>


          <div className="qr-professional-name">

            <div className="qr-name-row">

              <h3>
                {user.name}
              </h3>

              <BadgeCheck
                size={18}
                className="qr-name-verified"
              />

            </div>

            <p>
              {user.designation}
            </p>

            <span>
              {user.department}
            </span>

          </div>

        </div>


        {/* ====================================================
            PROFESSIONAL INFORMATION
        ==================================================== */}

        <div className="qr-professional-info">

          {/* EMPLOYEE ID */}

          <div className="qr-professional-info-item">

            <div className="qr-info-icon">

              <Hash size={15} />

            </div>

            <div>

              <span>
                Employee ID
              </span>

              <strong>
                {user.employeeId}
              </strong>

            </div>

          </div>


          {/* DESIGNATION */}

          <div className="qr-professional-info-item">

            <div className="qr-info-icon">

              <BriefcaseBusiness size={15} />

            </div>

            <div>

              <span>
                Designation
              </span>

              <strong>
                {user.designation}
              </strong>

            </div>

          </div>


          {/* DEPARTMENT */}

          <div className="qr-professional-info-item">

            <div className="qr-info-icon">

              <Building2 size={15} />

            </div>

            <div>

              <span>
                Department
              </span>

              <strong>
                {user.department}
              </strong>

            </div>

          </div>


          {/* EMAIL */}

          <div className="qr-professional-info-item">

            <div className="qr-info-icon">

              <Mail size={15} />

            </div>

            <div>

              <span>
                Email
              </span>

              <strong>
                {user.email}
              </strong>

            </div>

          </div>


          {/* REPORTING MANAGER */}

          <div className="qr-professional-info-item">

            <div className="qr-info-icon">

              <User size={15} />

            </div>

            <div>

              <span>
                Reporting Manager
              </span>

              <strong>
                {user.manager}
              </strong>

            </div>

          </div>


          {/* LOCATION */}

          <div className="qr-professional-info-item">

            <div className="qr-info-icon">

              <Building2 size={15} />

            </div>

            <div>

              <span>
                Location
              </span>

              <strong>
                {user.location}
              </strong>

            </div>

          </div>

        </div>


        {/* ====================================================
            STATUS
        ==================================================== */}

        <div className="qr-professional-status">

          <div className="qr-status-icon">

            <CheckCircle2 size={18} />

          </div>

          <div>

            <strong>
              {user.employmentStatus} Employee
            </strong>

            <span>
              Identity verified and available for verification.
            </span>

          </div>

          <span className="qr-status-badge">

            {user.status}

          </span>

        </div>


        {/* ====================================================
            QR VERIFICATION AREA
        ==================================================== */}

        <div className="qr-verification-card">

          {/* QR CODE */}

          <div className="qr-large-container">

            <QRCodeSVG
              value={verificationUrl}
              size={210}
              bgColor="#ffffff"
              fgColor="#0f172a"
              level="H"
              includeMargin={true}
            />

          </div>


          {/* QR INFORMATION */}

          <div className="qr-verification-information">

            {/* =================================================
                QR VERIFICATION HEADING
            ================================================= */}

            <div className="qr-verification-heading">

              <QrCode size={18} />

              <div>

                <strong>
                  QR Verification
                </strong>

                <span>
                  Scan to verify employee identity.
                </span>

              </div>

            </div>


            {/* =================================================
                EMPLOYEE ID
            ================================================= */}

            <div className="qr-user-id">

              <div className="qr-user-id-content">

                <span>
                  Employee ID
                </span>


                <div className="qr-user-id-value">

                  <strong>
                    {user.employeeId}
                  </strong>


                  <button
                    type="button"
                    className="qr-copy-id-button"
                    onClick={copyEmployeeId}
                    title={
                      copied
                        ? "Copied"
                        : "Copy Employee ID"
                    }
                    aria-label="Copy Employee ID"
                  >

                    {copied ? (
                      <Check size={13} />
                    ) : (
                      <Copy size={13} />
                    )}

                  </button>

                </div>

              </div>

            </div>


            {/* =================================================
                VERIFICATION URL
            ================================================= */}

            <div className="qr-verification-url">

              <span>
                Verification URL
              </span>

              <strong>
                {verificationUrl}
              </strong>

            </div>

          </div>

        </div>


        {/* ====================================================
            SECURITY NOTE
        ==================================================== */}

        <div className="qr-security-note-box">

          <ShieldCheck size={16} />

          <span>
            This verification is associated with the employee
            identity shown above. Do not share account credentials.
          </span>

        </div>


        {/* ====================================================
            OPEN VERIFICATION
        ==================================================== */}

        <button
          type="button"
          className="qr-open-verification"
          onClick={openVerificationPage}
        >

          <ExternalLink size={16} />

          Open Verification Page

        </button>

      </div>

    </div>

  ) : null;


  /* ============================================================
     MAIN COMPONENT
  ============================================================ */

  return (

    <>

      {/* ======================================================
          IDENTITY VERIFICATION SECTION
      ====================================================== */}

      <div className="linkedin-qr-section">

        <div className="linkedin-qr-info">

          <div className="linkedin-qr-icon">

            <ShieldCheck size={19} />

          </div>

          <div>

            <strong>
              Identity Verification
            </strong>

            <span>
              Scan the QR code to verify this employee profile.
            </span>

          </div>

        </div>


        <div className="linkedin-qr-action">

          <div className="linkedin-qr-box">

            <QRCodeSVG
              value={verificationUrl}
              size={72}
              bgColor="#ffffff"
              fgColor="#0f172a"
              level="H"
              includeMargin={true}
            />

          </div>


          <button
            type="button"
            className="linkedin-view-qr-button"
            onClick={() => setShowQr(true)}
          >

            <QrCode size={15} />

            View QR

          </button>

        </div>

      </div>


      {/* ======================================================
          PORTAL
      ====================================================== */}

      {showQr &&
        createPortal(
          qrModal,
          document.body
        )
      }

    </>

  );

}


export default UserIdentityCard;