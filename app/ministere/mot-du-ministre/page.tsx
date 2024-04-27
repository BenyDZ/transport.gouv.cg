import Image from "next/image";

const page = () => {
  return (
    <div className="pb-20">
      <div className="w-full h-[300px] bg-[#151821] flex justify-center items-center text-white z-10">
        <h1 className="font-bold text-3xl">MOT DU MINISTRE</h1>
      </div>
      <div className="px-10 lg:px-20">
        <div className="bg-[#F8F8F8] px-10 py-24 z-50 mt-[-50px] space-y-10 shadow-md">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center ">
            <Image
              src="/Images/sayi.png"
              alt="Mr le ministre"
              className="w-full lg:w-[292px] lg:h-[267px] shadow-lg"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="space-y-5">
              <p>
                Mesdames et Messieurs les Directeurs Généraux des intendances
                publiques et entreprises sous tutelle.
              </p>
              <p>
                Permettez-moi, avant de tout évoquer, je prescrirais très
                poliment allouer à son excellence M. Denis SASSOU N’GUESSO,
                Président de la république, Chef de l’Etat, ma profonde
                nécessité et tous mes remerciements pour l’honneur et la
                confiance renouvelée au sein du Gouvernement en qualité de
                Ministre des Transports, de l’Aviation Civile et de la Marine
                Marchande.
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <p>
              En conséquence, comme vous le savez dès lors et, conformément aux
              directions et aux éminences établies par le Chef de l’Etat, nous
              avons le devoir de travailler en toute implication à l’atteinte
              des objectifs que nous avons en contribution. L’adéquation entre
              objectif, performance et résultat est donc une exigence. Cela
              passe nécessairement par la bonne gouvernance, la transparence et
              le respect strict de la chose publique. Nous devons donc faire la
              promotion de la notion valeur-travail auprès de nos
              collaborateurs.{" "}
            </p>
            <p>
              L’exemplarité des dirigeants, le contrôle et la sanction sont des
              leviers à mettre en œuvre sans atermoiement. Par conséquent, la
              loi s’appliquera à ceux qui se rendront coupables d’actes
              répréhensibles, à quelque niveau que se soit. L’instruction de
              S.E.M. le Président de la République, Chef de l’Etat doit
              s’appliquer avec rigueur. Il vous appartient d’intérioriser et de
              vulgariser le message « Tolérance zéro » auprès de tous nos
              collaborateurs. A cet effet, la campagne de sensibilisation
              initiée par la Haute Autorité de Lutte contre le Corruption à
              laquelle vous avez tous participé hier a été édifiante.
            </p>
            <p>
              Je vous demande de vulgariser auprès de vos agents la synthèse des
              informations qui vous a été transmise. Les grandes réformes et les
              changements apportent toujours leurs lots d’incompréhensions et
              d’inquiétudes. Il nous appartient d’expliquer nos actions,
              particulièrement aux partenaires sociaux dans le cadre d’un
              dialogue qui doit être permanent, responsable et constructif. Par
              ailleurs, nonobstant cette période difficile caractérisée par une
              crise économique aggravée par un contexte sanitaire difficile, je
              vous enjoints à persévérer dans vos efforts au travail en
              promouvant absolument la bonne gouvernance
            </p>
            <p>
              Sur le contexte sanitaire relatif à la pandémie à Coronavirus, le
              gouvernement a fait des efforts colossaux pour rendre accessible à
              tous nos compatriotes, gratuitement, la vaccination. Le monde
              entier se fait vacciner et la République du Congo ne saurait
              rester en marge de ce qui deviendra à court terme une condition
              sine qua non dans les échanges commerciaux et la relance des
              économies. Il vous revient d’argumenter et de convaincre vos
              collaborateurs, et vos proches à se faire volontairement vacciner.
              La santé de nos compatriotes et notre économie ne peut se payer le
              luxe de faire l’impasse sur la vaccination.
            </p>
            <p>
              Cela dit, la vaccination ne doit en aucun cas occulter la
              nécessité de continuer à appliquer strictement les gestes
              barrières, particulièrement le port du masque qui est obligatoire.
              Mesdames et messieurs, Le projet de société « Ensemble,
              poursuivons la marche » sur la base duquel le peuple congolais a
              fait confiance à S.E.M. Denis SASSOU N’GUESSO, Président de la
              République, Chef de l’Etat, a été décliné en programme d’actions
              du gouvernement et présenté, le 21 juin 2021, devant la
              représentation nationale par Monsieur le Premier Ministre, Chef du
              Gouvernement. Il nous faut maintenant décliner ce programme
              d’action en objectif mesurable et quantifiable, chacun dans nos
              secteurs et domaines de responsabilité afin de participer
              activement à la mise en application et à l’atteinte des objectifs
              que nous avons en commun, permettant ainsi de favoriser
              l’amélioration continue des conditions de vie de nos compatriotes.
            </p>
            <p>
              Pour atteindre ces objectifs, une approche de gestion focalisée
              sur la performance et l’obtention de résultats sera mise en œuvre.
              La gestion axée sur les résultats sera donc implémentée dans les
              administrations et organismes sous tutelle du Ministère des
              Transports, de l’Aviation Civile et de la Marine Marchande, et
              sera d’application stricte. Je vous enjoints encore une fois,
              mesdames et messieurs les Directeurs Généraux à transmettre tous
              ces messages à vos équipes respectives et à susciter leurs
              adhésions. Vous pouvez compter sur notre engagement à vos côtés et
              le soutien de la tutelle dans la mise en œuvre de ces directives
              et des projets en cours et à venir. Je vous remercie.
            </p>
            <p className="font-bold text-right">
              M. Honore SAYI, Ministre des transports, de l’aviation civile et
              de la marine marchande
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
