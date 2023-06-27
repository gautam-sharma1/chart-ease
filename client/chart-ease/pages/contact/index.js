import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

function Contact(props) {
  return (
    <>
      <Layout>
        <div class="hero min-h-screen">
          <div>
            <Link
              className="btn btn-ghost normal-case text-xl px-20"
              href="mailto:gautamsharma2813@gmail.com"
            >
              Send an Email! :)
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Contact;
