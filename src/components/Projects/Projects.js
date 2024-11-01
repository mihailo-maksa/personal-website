import React from "react";
import ProjectCard from "./ProjectCard";
import "./projects.css";
import Skills from "../Skills/Skills";
import personalProjects from "../../assets/personal_projects.png";
import openSourceContributions from "../../assets/open_source_contributions.png";
import scaleroad from "../../assets/scaleroad.png";
import avix from "../../assets/avix.png";
import longterm from "../../assets/longterm.png";
import majr from "../../assets/majr.png";
import audits from "../../assets/audits.png";
import tokenflow from "../../assets/tokenflow.png";
import radiant from "../../assets/radiant.png";
import offblocks from "../../assets/offblocks.png";
import intuition from "../../assets/intuition.png";
import kelp from "../../assets/kelp.png";

const Projects = () => (
  <div className="selected-projects" id="portfolio">
    <h1 className="portfolio-title selected-title">EXPERIENCE</h1>
    <div className="border-line portfolio-border-line" />
    <div className="my-projects">
      <ProjectCard
        img={intuition}
        title={"Intuition Systems, Inc."}
        jobTitle={"Senior Smart Contract Engineer"}
        workTime={"(January 2024 - Now)"}
        info={
          <span>
            <a
              href="https://intuition.systems"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              Intuition
            </a>{" "}
            is empowering people to build, explore, curate, and own a communal
            knowledge graph to more reliably navigate our exponential world.
          </span>
        }
        info2={
          <span>
            Led development and open-sourcing of v1 and v2 Intuition protocol
            contracts, ensuring production-readiness for 30+ smart contracts
            through rigorous audits.
          </span>
        }
      />
      <ProjectCard
        img={tokenflow}
        title={"TokenFlow"}
        jobTitle={"Senior Smart Contract Engineer"}
        workTime={"(May 2023 - December 2023)"}
        info={
          <span>
            <a
              href="https://tokenflow.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              TokenFlow
            </a>{" "}
            is a premier smart contract development agency specialized in
            building custom-made solutions for web3 clients.
          </span>
        }
        info2={
          <span>
            Led the design and development of complex smart contract systems for
            15+ different web3 protocols, achieving high standards in
            performance and security.
          </span>
        }
      />
      {/*<ProjectCard
        img={audits}
        title={"Smart Contract Audits"}
        customClassName={"audits-card"}
        info={
          <span>
            In addition to my dedication to thorough testing, smart contracts
            I've developed have undergone multiple audits by{" "}
            <a
              href="https://hacken.io"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              Hacken{" "}
            </a>
            and other leading smart contract security auditors.
          </span>
        }
        info2={
          <span>
            Each of these audits has resulted in exceptional scores
            (consistently above 9 out of 10), with no critical bugs, exploits or
            vulnerabilities identified. See{" "}
            <a
              href="https://hacken.io/wp-content/uploads/2022/09/MAJR_INC_SCAudit_Report2.docx.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              audit 1
            </a>
            ,{" "}
            <a
              href="https://wp.hacken.io/wp-content/uploads/2022/09/Majr_Dao_512857947_SCAudit_Report_4.docx.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              audit 2
            </a>{" "}
            and{" "}
            <a
              href="https://hacken.io/wp-content/uploads/2022/09/MAJR-INC_09-19-2022_SCAudit_Report3-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              audit 3
            </a>{" "}
            for more details.
          </span>
        }
      /> */}
      <ProjectCard
        img={majr}
        title={"MAJR, Inc."}
        jobTitle={"Senior Smart Contract Engineer"}
        workTime={"(Jun 2022 - May 2023)"}
        info={
          <span>
            <a
              href="https://majr.io"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              MAJR
            </a>{" "}
            is a web3 media company focused on the creator memberships and
            community digital asset accumulation.{" "}
          </span>
        }
        info2={
          <span>
            Developed MAJR DAO and NFT contracts from scratch, comprised of 20+
            production- ready smart contracts that achieved exceptional scores
            across three separate audits.
          </span>
        }
      />
      <ProjectCard
        img={longterm}
        title={"LongTerm Finance"}
        jobTitle={"Smart Contract Engineer"}
        workTime={"(Dec 2020 - Jun 2022)"}
        info={
          <span>
            <a
              href="https://long-term.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              LongTerm Finance
            </a>{" "}
            is a tokenized index fund protocol designed to track the market
            capitalization of the entire altcoin market.
          </span>
        }
        info2={
          <span>
            Developed core protocol contracts to tokenize the entire altcoin
            market cap onchain, supporting 10+ collateral types across multiple
            different chains.
          </span>
        }
      />
      <ProjectCard
        img={avix}
        title={"Avix Finance"}
        jobTitle={"Smart Contract Engineer"}
        workTime={"(Mar 2019 - Dec 2020)"}
        info={
          <span>
            Avix Finance was a permissionless tokenized volatility DeFi protocol
            designed to track the price of VIX onchain.
          </span>
        }
        info2={
          <span>
            Built custom onchain oracles to track the stock market volatility,
            enabling the VIX tokenization within the protocol with close to 100%
            precision.
          </span>
        }
      />
      <ProjectCard
        img={scaleroad}
        title={"ScaleRoad LLC"}
        jobTitle={"Full Stack Software Engineer"}
        workTime={"(Jul 2018 - Mar 2019)"}
        info={
          <span>
            <a
              href="https://scaleroad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              ScaleRoad
            </a>{" "}
            is a SaaS platform for tracking and managing investment research in
            a structured and organized way.
          </span>
        }
        info2={
          <span>
            Enhanced UX and platform performance with custom UI elements and
            reliable, low- latency APIs achieving ~100% uptime.
          </span>
        }
      />
      {/* <ProjectCard
        img={openSourceContributions}
        title={"Open Source Contributions"}
        info={
          <span>
            I actively enhanced the functionality and user experience of various{" "}
            open-source web3 protocols and dApps, reflecting my
            dedication to the decentralized web evolution.
          </span>
        }
        info2={
          <span>
            Some notable examples include{" "}
            MetaMask, Aave and Uniswap v3.
          </span>
        }
      /> */}
      {/*<ProjectCard
        img={personalProjects}
        title={"Personal Projects"}
        info={
          <span>
            My passion for building and experimenting with web3
            technology resulted in over 100 personal projects, as shown on my{" "}
            <a
              href="https://github.com/mihailo-maksa"
              target="_blank"
              rel="noopener noreferrer"
              className="bold project-card-link"
            >
              Github.
            </a>
          </span>
        }
        info2={
          <span>
            My projects range from small experiments to full-fledged
            applications, and all of them use{" "}
            the latest web3 and related technologies.
          </span>
        }
      /> */}
      <div style={{ marginRight: "-30px" }} />
    </div>
    <Skills />
  </div>
);

export default Projects;
