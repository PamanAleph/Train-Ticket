"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const authRoute = (Component: any) => {
  return (props: any) => {
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      const checkToken = async () => {
        const token = localStorage.getItem("secretkey");

        if (!token) {
          alert("Authentication required");
          router.replace("/");
        } else {
          setAuthenticated(true);
        }
      };

      checkToken();
    }, [router]);

    if (authenticated) {
      return <Component {...props} />;
    } else {
      return null; // or you can render a loading spinner or something else
    }
  };
};

export default authRoute;
