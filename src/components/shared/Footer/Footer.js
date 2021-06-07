import React from 'react';
import SimpleReactFooter from "simple-react-footer";

const Footer = () => {
    const description = "We are team 203 from Programming Hero Batch 3. This project is done as an assignment during SCIC. This is a simple news paper website. Where you can find News. You can find out all the latest news in right side.";
    const title = "Team 203 Programming Hero";
    const columns = [
        {
            title: "Resources",
            resources: [
                {
                    name: "About",
                    link: "/about"
                },
                {
                    name: "Careers",
                    link: "/careers"
                },
                {
                    name: "Contact",
                    link: "/contact"
                },
                {
                    name: "Admin",
                    link: "/admin"
                }
            ]
        },
        {
            title: "Legal",
            resources: [
                {
                    name: "Privacy",
                    link: "/privacy"
                },
                {
                    name: "Terms",
                    link: "/terms"
                }
            ]
        },
        {
            title: "Team",
            resources: [
                {
                    name: "Owali",
                    link: "https://github.com/OwaliShawon"
                },
                {
                    name: "Sabbir",
                    link: "https://github.com/Sabbir185"
                },
                {
                    name: "Mainul",
                    link: "/culture"
                }
            ]
        }
    ];
    return (
        <div>
            <SimpleReactFooter
                description={description}
                title={title}
                columns={columns}
                linkedin="https://github.com/Sabbir185/daily-news-team-work"
                facebook="fluffy_cat_on_fb"
                twitter="fluffy_cat_on_twitter"
                instagram="fluffy_cat_live"
                youtube="UCFt6TSF464J8K82xeA?"
                pinterest="fluffy_cats_collections"
                copyright="Team 203"
                iconColor="black"
                backgroundColor="bisque"
                fontColor="black"
                copyrightColor="darkgrey"
            />;
        </div>
    );
};

export default Footer;