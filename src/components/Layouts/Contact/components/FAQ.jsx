import Accordion from "../../../Elements/Accordion";
import { MotionInView } from "../../../Elements/Motion";

const faq = [
  {
    id: 1,
    title: "What is Genshin Impact?",
    desc: "Genshin Impact is an open-world action RPG developed and published by miHoYo. Players explore the fantasy world of Teyvat, controlling a range of characters, each with unique abilities, to combat enemies and solve puzzles. The game features a gacha system to acquire new characters and weapons.",
  },
  {
    id: 2,
    title: "How can I contribute to the impact. community?",
    desc: "You can contribute to the impact. community by sharing your own guides, tips, and fan art. Participate in discussions, provide feedback on other members' content, and join our events and competitions. Your active participation helps make the community more vibrant and informative for all members.",
  },
  {
    id: 3,
    title: "Is impact. affiliated with miHoYo?",
    desc: "No, impact. is an independent fan-made community for Genshin Impact players. We are not officially affiliated with miHoYo. However, we strive to provide high-quality content and a supportive community for all Genshin Impact enthusiasts.",
  },
];
export const FAQ = () => {
  return (
    <section
      className="max-w-[1440px] mx-auto px-2 py-20 lg:py-28 sm:px-0"
      id="faq"
    >
      <div className="w-11/12 mx-auto">
        <MotionInView
          initial={{ opacity: 0, y: "-10%" }}
          whileInView={{ opacity: 1, y: "0" }}
        >
          <h3 className="mb-8 font-bold leading-none h3">General FAQs</h3>
        </MotionInView>
        <div>
          <Accordion collapsible type="multiple" defaultValue={["item-1"]}>
            {faq.map((item) => (
              <MotionInView
                key={item.id}
                initial={{ opacity: 0, y: "-10%" }}
                whileInView={{ opacity: 1, y: "0" }}
                transition={{ delay: 0.1 * item.id, duration: 0.5 }}
              >
                <Accordion.Item value={`item-${item.id}`}>
                  <Accordion.Button className="hover:bg-white/50">
                    <h5 className="font-bold leading-none text-left h5">
                      {item.title}
                    </h5>
                  </Accordion.Button>
                  <Accordion.Content>
                    <p>{item.desc}</p>
                  </Accordion.Content>
                </Accordion.Item>
              </MotionInView>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
