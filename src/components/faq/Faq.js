import React, { useEffect, useState } from "react";
import "./Faq.css";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title:
        "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sitamet ipsum lorem",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sitamet ipsum lorem`,
    },
    {
      title:
        "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sitamet ipsum lorem",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sitamet ipsum lorem`,
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sitamet ipsum lorem",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sitamet ipsum lorem`,
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sitamet ipsum lorem",
      content: `YLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sitamet ipsum lorem`,
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sitamet ipsum lorem",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sitamet ipsum lorem`,
    },
  ],
};

const styles = {
  bgColor: "transparet",
  titleTextColor: "blue",
  rowTitleColor: "black",
  rowContentColor: "black",
  rowContentPaddingBottom: "20px",
  arrowColor: "black",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

export default function FAQ() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div class="col-12 col-lg-12" Style="font-size: 20px;padding-left:0;">
            <span>THINGS ALL ARE ASKING</span>
          </div>
          <div
            class="col-12 col-lg-12"
            Style="font-size: 45px;padding-left:0; "
          >
            FAQ
          </div>
        </div>
        <div className="row">
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    </div>
  );
}
