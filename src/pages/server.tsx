import PageTransition from "@/components/common/PageTransitions";
import Section from "@/components/common/Section";
import Layout from "@/components/layout";
import ServerInfo from "@/components/server";

const Server = () => {
  return (
    <Layout>
      <PageTransition>
        <Section>
          <ServerInfo />
        </Section>
      </PageTransition>
    </Layout>
  );
};

export default Server;
