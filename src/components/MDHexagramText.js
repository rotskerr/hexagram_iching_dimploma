import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const MDHexagramText = ({ hexagramNumber }) => {
  const [markdown, setMarkdown] = useState("");
  const [serverResponse, setServerResponse] = useState("");
  const [ipAddress, setIPAddress] = useState("");

  useEffect(() => {
    axios
      .get("https://api.ipify.org/?format=json")
      .then((response) => {
        const data = response.data;
        setIPAddress(data.ip);
        console.log(data.ip);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let isMounted = true;

    axios
      .get(`https://rotskerr.s-host.net/api/book/${hexagramNumber}`)
      .then((response) => {
        if (isMounted) {
          const responseData = response.data;
          if (responseData && responseData.text) {
            const markdownText = responseData.text;
            setMarkdown(markdownText);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      isMounted = false;
    };
  }, [hexagramNumber]);



  return (
    <>
      <ReactMarkdown
        children={markdown}
        components={{
          h1: "h3",
          h2: "h4",
          h3: "h5",
        }}
      />
    </>
  );
};

export default MDHexagramText;
