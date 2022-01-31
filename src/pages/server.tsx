import PageTransition from "@/components/common/PageTransitions";
import Section from "@/components/common/Section";
import ServerInfo from "@/components/server";

const Server = () => {
  return (
    <PageTransition>
      <>
        <Section>
          <ServerInfo />
        </Section>
      </>
    </PageTransition>
  );
};

export default Server;
