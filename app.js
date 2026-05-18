const app = document.getElementById("app");

const weeks = [
  {
    title: "Semana 1 — Pós-Menstruação (Fase Folicular)",
    info: "Estrogênio em ascensão • Foco em progressão de carga e volume • 3–4 séries de 8–12 reps • Intensidade moderada a alta • Descanso: 60–90s",
    workouts: [
      {
        name: "Treino A — Inferiores + Core",
        exercises: [
          {
            nome: "Agachamento Livre",
            tipo: "Calistenia",
            series: "3–4 séries de 8–12 reps",
            foco: "Progressão para Pistol Squat",
            tecnica: "Manter peso no centro do pé, joelhos alinhados com os dedos. Busque maior amplitude a cada sessão.",
            explicacao: "Fase ideal para ganho de força. Tente aumentar a amplitude ou adicionar repetições em relação ao ciclo anterior.",
            video: "",
            nota: ""
          },
          {
            nome: "Leg Press 45º",
            tipo: "Máquina",
            series: "3–4 séries de 8–12 reps",
            foco: "Força Base — aumento de carga",
            tecnica: "Evitar bloqueio articular no topo. Tente aumentar levemente o peso em relação ao ciclo anterior.",
            explicacao: "Permite progressão segura de carga sem exigir estabilização excessiva. Aproveite a boa recuperação desta fase.",
            video: "",
            nota: ""
          },
          {
            nome: "Stiff (Levantamento Terra Romeno)",
            tipo: "Máquina / Barra",
            series: "3–4 séries de 8–12 reps",
            foco: "Posterior de coxa e glúteos",
            tecnica: "Manter a coluna neutra, empurrar o quadril para trás. Sentir o alongamento nos isquiotibiais.",
            explicacao: "Excelente para fortalecer a cadeia posterior, base para movimentos de calistenia como o L-sit e o pistol squat.",
            video: "",
            nota: ""
          },
          {
            nome: "Elevação de Quadril (Hip Thrust)",
            tipo: "Máquina / Peso Livre",
            series: "3–4 séries de 10–12 reps",
            foco: "Glúteo máximo",
            tecnica: "Apoiar a escápula no banco, empurrar o quadril até alinhar com os joelhos. Contrair o glúteo no topo.",
            explicacao: "Principal exercício de isolamento do glúteo. Tente aumentar a carga progressivamente nesta semana.",
            video: "",
            nota: ""
          },
          {
            nome: "Hollow Body Hold",
            tipo: "Calistenia",
            series: "3–4 séries de 20–40 segundos",
            foco: "Core — tensão corporal",
            tecnica: "Achatar lombar no chão, elevar pernas e ombros. Manter a posição sem segurar a respiração.",
            explicacao: "Base da tensão corporal para todos os movimentos de calistenia. Nesta fase, tente aumentar o tempo de hold.",
            video: "",
            nota: ""
          },
          {
            nome: "Prancha Abdominal",
            tipo: "Calistenia",
            series: "3 séries de 30–60 segundos",
            foco: "Core — estabilidade",
            tecnica: "Corpo em linha reta da cabeça ao calcanhar. Contrair abdômen e glúteos simultaneamente.",
            explicacao: "Fortalece o core de forma isométrica, fundamental para estabilidade em todos os movimentos.",
            video: "",
            nota: ""
          }
        ]
      },
      {
        name: "Treino B — Superiores + Escápula",
        exercises: [
          {
            nome: "Puxada Frontal",
            tipo: "Máquina",
            series: "3–4 séries de 8–12 reps",
            foco: "Progressão para Barra Fixa",
            tecnica: "Puxar cotovelos em direção ao chão, retrair escápulas. Tente aumentar a carga esta semana.",
            explicacao: "Principal precursor da barra fixa. Dorsais e escápulas fortes são essenciais para a calistenia.",
            video: "",
            nota: ""
          },
          {
            nome: "Remada Curvada (Barra ou Halteres)",
            tipo: "Peso Livre",
            series: "3–4 séries de 8–12 reps",
            foco: "Dorsal médio e romboides",
            tecnica: "Coluna neutra, puxar cotovelos para trás e para cima. Espremer as escápulas no topo.",
            explicacao: "Fortalece a musculatura do meio das costas, essencial para estabilidade e postura em movimentos de tração.",
            video: "",
            nota: ""
          },
          {
            nome: "Supino Reto (Barra ou Halteres)",
            tipo: "Peso Livre",
            series: "3–4 séries de 8–12 reps",
            foco: "Peitoral — força de empurrar",
            tecnica: "Descer a barra até tocar levemente o peito, manter cotovelos a 45º do corpo.",
            explicacao: "Base da força de empurrar horizontal, essencial para os fundamentos de flexão de braços e parallettes.",
            video: "",
            nota: ""
          },
          {
            nome: "Desenvolvimento de Ombros (Halteres)",
            tipo: "Peso Livre",
            series: "3–4 séries de 10–12 reps",
            foco: "Deltoide — força de empurrar vertical",
            tecnica: "Empurrar acima da cabeça sem arquear a lombar. Controlar a descida.",
            explicacao: "Fortalece os ombros para movimentos de empurrar vertical, como o handstand push-up.",
            video: "",
            nota: ""
          },
          {
            nome: "Scapular Push-up",
            tipo: "Calistenia",
            series: "3 séries de 10–15 reps",
            foco: "Escápula — serrátil anterior",
            tecnica: "Em posição de prancha, mover apenas as escápulas para frente e para trás sem dobrar os cotovelos.",
            explicacao: "Fortalece o serrátil e os estabilizadores escapulares. Fundamental para a saúde dos ombros na calistenia.",
            video: "",
            nota: ""
          },
          {
            nome: "Rosca Direta (Halteres)",
            tipo: "Peso Livre",
            series: "3 séries de 10–12 reps",
            foco: "Bíceps — auxílio na tração",
            tecnica: "Cotovelos fixos ao lado do corpo. Subir e descer com controle.",
            explicacao: "Bíceps fortes auxiliam diretamente na barra fixa e nas puxadas. Fase ótima para progressão de carga.",
            video: "",
            nota: ""
          }
        ]
      },
      {
        name: "Treino C — Full Body + Mobilidade",
        exercises: [
          {
            nome: "Agachamento Goblet (Kettlebell)",
            tipo: "Peso Livre",
            series: "3 séries de 10–12 reps",
            foco: "Full Body — coordenação",
            tecnica: "Segurar o peso no peito, descer com torso ereto e abertura de quadril.",
            explicacao: "Excelente para trabalhar força e mobilidade simultâneas. Ótimo aquecimento para o agachamento livre.",
            video: "",
            nota: ""
          },
          {
            nome: "Flexão de Braços",
            tipo: "Calistenia",
            series: "3–4 séries até falha controlada",
            foco: "Peitoral + Tríceps + Core",
            tecnica: "Corpo em linha reta, descer até o peito quase tocar o chão. Nesta fase, busque mais repetições.",
            explicacao: "Movimento fundamental da calistenia. Aproveite a energia elevada desta fase para bater recordes.",
            video: "",
            nota: ""
          },
          {
            nome: "Afundo (Avanço com Halteres)",
            tipo: "Peso Livre",
            series: "3 séries de 10 reps por perna",
            foco: "Quadríceps, Glúteo e Equilíbrio",
            tecnica: "Dar um passo longo, joelho da frente não ultrapassa a ponta do pé, joelho de trás quase toca o chão.",
            explicacao: "Trabalha cada perna individualmente, essencial para equilíbrio e base para o pistol squat.",
            video: "",
            nota: ""
          },
          {
            nome: "Cat-Cow + Mobilidade de Quadril",
            tipo: "Mobilidade",
            series: "2–3 séries de 10 ciclos cada",
            foco: "Coluna e Quadril",
            tecnica: "Movimentos lentos e controlados, respirando em cada posição.",
            explicacao: "Mantém a mobilidade articular e prepara o corpo para os treinos intensos desta fase.",
            video: "",
            nota: ""
          }
        ]
      }
    ]
  },

  {
    title: "Semana 2 — Período Fértil (Fase Ovulatória)",
    info: "Pico de estrogênio • Foco em cargas altas com técnica impecável • 3 séries de 8–10 reps • Intensidade alta • Descanso: 90–120s • ⚠️ Atenção à frouxidão ligamentar",
    workouts: [
      {
        name: "Treino A — Inferiores + Core",
        exercises: [
          {
            nome: "Agachamento Livre",
            tipo: "Calistenia",
            series: "3 séries de 8–10 reps",
            foco: "Técnica impecável com carga máxima",
            tecnica: "⚠️ Atenção redobrada ao alinhamento dos joelhos. Foco extremo na execução — evite movimentos bruscos ou compensações.",
            explicacao: "Pico de força e coordenação. Mantenha as cargas desafiadoras, mas priorize a qualidade do movimento acima de tudo.",
            video: "",
            nota: ""
          },
          {
            nome: "Leg Press 45º",
            tipo: "Máquina",
            series: "3 séries de 8–10 reps",
            foco: "Carga alta com estabilidade guiada",
            tecnica: "⚠️ Prefira a máquina nesta fase pela estabilidade guiada. Mantenha o peso alto, mas não arrisque lesões.",
            explicacao: "As máquinas são grandes aliadas nesta fase por oferecerem estabilidade guiada, compensando a leve frouxidão ligamentar.",
            video: "",
            nota: ""
          },
          {
            nome: "Cadeira Extensora",
            tipo: "Máquina",
            series: "3 séries de 8–10 reps",
            foco: "Quadríceps — isolamento controlado",
            tecnica: "Subir de forma controlada, segurar 1 segundo no topo. Descer lentamente. ⚠️ Evite sobrecarregar o joelho com movimentos bruscos.",
            explicacao: "Isolamento seguro dos quadríceps com controle total do movimento, ideal para esta fase.",
            video: "",
            nota: ""
          },
          {
            nome: "Mesa Flexora",
            tipo: "Máquina",
            series: "3 séries de 8–10 reps",
            foco: "Posterior de coxa — segurança articular",
            tecnica: "Movimento fluido e controlado. ⚠️ Evite solavancos — a frouxidão ligamentar aumenta o risco em movimentos bruscos.",
            explicacao: "Isola os isquiotibiais com segurança máxima. Excelente escolha nesta fase pela estabilidade da máquina.",
            video: "",
            nota: ""
          },
          {
            nome: "Ab Wheel (Roda Abdominal)",
            tipo: "Calistenia",
            series: "3 séries de 6–10 reps",
            foco: "Core avançado",
            tecnica: "Partir da posição de joelhos, rolar devagar até o limite, manter core contraído na volta.",
            explicacao: "Movimento avançado de core que treina a anti-extensão. Pico de coordenação favorece o controle nesta fase.",
            video: "",
            nota: ""
          },
          {
            nome: "Elevação de Pernas Pendurada",
            tipo: "Calistenia",
            series: "3 séries de 8–12 reps",
            foco: "Core inferior — progressão para L-sit",
            tecnica: "Pendurar na barra, elevar as pernas com controle sem balançar o corpo.",
            explicacao: "Excelente para desenvolver o core inferior necessário para o L-sit, um dos fundamentos da calistenia.",
            video: "",
            nota: ""
          }
        ]
      },
      {
        name: "Treino B — Superiores + Força de Empurrar",
        exercises: [
          {
            nome: "Puxada Frontal",
            tipo: "Máquina",
            series: "3 séries de 8–10 reps",
            foco: "Carga máxima — técnica impecável",
            tecnica: "⚠️ Foco total na execução. Puxar cotovelos para baixo, retrair escápulas completamente. Sem compensações com o tronco.",
            explicacao: "Aproveite o pico de força para trabalhar com carga desafiadora, mas não abra mão da técnica.",
            video: "",
            nota: ""
          },
          {
            nome: "Remada na Máquina (Seated Row)",
            tipo: "Máquina",
            series: "3 séries de 8–10 reps",
            foco: "Dorsal médio com estabilidade guiada",
            tecnica: "Puxar para o umbigo, espremer escápulas no final. Controlar a volta lentamente.",
            explicacao: "Máquina ideal para esta fase — alta carga com estabilidade. Desenvolve força de tração fundamental para a barra fixa.",
            video: "",
            nota: ""
          },
          {
            nome: "Supino Inclinado (Halteres)",
            tipo: "Peso Livre",
            series: "3 séries de 8–10 reps",
            foco: "Peitoral superior + Ombros",
            tecnica: "⚠️ Controle total da descida. Cotovelos a 45º. Evite soltar os halteres de forma descontrolada.",
            explicacao: "Pico de força permite trabalhar com cargas altas. O peitoral superior é essencial para as flexões e parallettes.",
            video: "",
            nota: ""
          },
          {
            nome: "Supino Vertical na Máquina (Chest Press)",
            tipo: "Máquina",
            series: "3 séries de 8–10 reps",
            foco: "Peitoral — segurança articular",
            tecnica: "Empurrar de forma controlada, não bloquear os cotovelos no topo.",
            explicacao: "Alternativa mais segura para o ombro nesta fase. Mantém a intensidade com menor risco articular.",
            video: "",
            nota: ""
          },
          {
            nome: "Desenvolvimento de Ombros na Máquina",
            tipo: "Máquina",
            series: "3 séries de 8–10 reps",
            foco: "Deltoide — estabilidade guiada",
            tecnica: "⚠️ Prefira a máquina aos halteres nesta fase. Movimento controlado, sem arquear a lombar.",
            explicacao: "A máquina oferece estabilidade guiada, reduzindo o risco para os ligamentos dos ombros nesta fase.",
            video: "",
            nota: ""
          },
          {
            nome: "Dips (Paralelas ou Banco)",
            tipo: "Calistenia",
            series: "3 séries de 8–10 reps",
            foco: "Tríceps + Peitoral inferior",
            tecnica: "⚠️ Descer apenas até 90º nos cotovelos. Evite sobrecarregar os ombros descendo demais.",
            explicacao: "Movimento fundamental de empurrar. Aproveite o pico de força desta fase com técnica controlada.",
            video: "",
            nota: ""
          }
        ]
      },
      {
        name: "Treino C — Potência + Full Body",
        exercises: [
          {
            nome: "Kettlebell Swing",
            tipo: "Peso Livre",
            series: "3 séries de 12–15 reps",
            foco: "Potência de quadril + Full Body",
            tecnica: "⚠️ Movimento vem do quadril, não dos braços. Manter lombar neutra durante todo o movimento.",
            explicacao: "Exercício de potência que aproveita o pico de força e coordenação desta fase. Fundamental para explosividade.",
            video: "",
            nota: ""
          },
          {
            nome: "Burpee",
            tipo: "Calistenia",
            series: "3 séries de 10 reps",
            foco: "Full Body — potência e condicionamento",
            tecnica: "⚠️ Execução controlada, sem impacto excessivo nos joelhos na aterrissagem.",
            explicacao: "Aproveitando o pico de energia e coordenação. Mantenha a técnica mesmo com alta intensidade.",
            video: "",
            nota: ""
          },
          {
            nome: "Agachamento com Salto",
            tipo: "Calistenia",
            series: "3 séries de 8–10 reps",
            foco: "Potência de pernas",
            tecnica: "⚠️ Aterrissagem suave, absorver o impacto com a flexão do joelho. Evite aterrissagem com joelhos em valgo.",
            explicacao: "Pico de força e coordenação permite trabalhar potência. Controle a aterrissagem pela frouxidão ligamentar.",
            video: "",
            nota: ""
          },
          {
            nome: "Alongamento Estático + Respiração",
            tipo: "Mobilidade",
            series: "10–15 minutos ao final",
            foco: "Recuperação e prevenção",
            tecnica: "Segurar cada posição por 30–60 segundos. Respiração profunda e controlada.",
            explicacao: "Essencial para compensar a alta intensidade desta fase e manter a mobilidade articular.",
            video: "",
            nota: ""
          }
        ]
      }
    ]
  },

  {
    title: "Semana 3 — TPM (Fase Lútea Média/Tardia)",
    info: "Pico de progesterona • Foco em técnica e resistência • 3 séries de 12–15 reps • Intensidade leve a moderada • Descanso: 90–120s • 🌡️ Evitar falha muscular • 🩷 Adaptar para dor nos seios",
    workouts: [
      {
        name: "Treino A — Inferiores (Máquinas Prioritárias)",
        exercises: [
          {
            nome: "Leg Press 45º",
            tipo: "Máquina",
            series: "3 séries de 12–15 reps",
            foco: "Força com menor exigência de estabilização",
            tecnica: "🌡️ Carga mais leve que as semanas anteriores. Foco na contração muscular e não no peso. Pause 1 segundo no final.",
            explicacao: "Máquinas são altamente recomendadas nesta fase — exigem menos estabilização do core e poupam o sistema nervoso central.",
            video: "",
            nota: ""
          },
          {
            nome: "Cadeira Extensora",
            tipo: "Máquina",
            series: "3 séries de 12–15 reps",
            foco: "Quadríceps — foco na contração",
            tecnica: "Peso leve a moderado. Suba devagar (2s), segure no topo (1s), desça lentamente (3s).",
            explicacao: "Controle do tempo sob tensão compensa a redução de carga, mantendo o estímulo muscular adequado.",
            video: "",
            nota: ""
          },
          {
            nome: "Mesa Flexora",
            tipo: "Máquina",
            series: "3 séries de 12–15 reps",
            foco: "Posterior — isolamento seguro",
            tecnica: "Movimento lento e controlado. Sentir o músculo trabalhar em cada centímetro da amplitude.",
            explicacao: "Isola os isquiotibiais com segurança, sem exigir equilíbrio ou estabilização intensa do core.",
            video: "",
            nota: ""
          },
          {
            nome: "Elevação de Quadril (Hip Thrust) — Peso Corporal",
            tipo: "Calistenia / Peso Livre Leve",
            series: "3 séries de 15 reps",
            foco: "Glúteo — menor impacto articular",
            tecnica: "🌡️ Reduza ou elimine o peso adicional. Foco total na contração do glúteo. Segure 2 segundos no topo.",
            explicacao: "Ótimo para manter o trabalho glúteo sem sobrecarregar as articulações durante a TPM.",
            video: "",
            nota: ""
          },
          {
            nome: "Abdução de Quadril na Máquina",
            tipo: "Máquina",
            series: "3 séries de 15 reps",
            foco: "Glúteo médio — estabilidade",
            tecnica: "Movimento controlado, sem usar impulso. Sentir o glúteo lateral trabalhar.",
            explicacao: "Fortalece o glúteo médio com mínimo impacto articular e sem exigir equilíbrio — perfeito para esta fase.",
            video: "",
            nota: ""
          },
          {
            nome: "Prancha Abdominal",
            tipo: "Calistenia",
            series: "3 séries de 20–40 segundos",
            foco: "Core — isométrico de baixa intensidade",
            tecnica: "🌡️ Reduza o tempo se sentir desconforto abdominal. Respiração normal durante o hold.",
            explicacao: "Mantém a ativação do core sem impacto ou movimento que possa causar desconforto durante a TPM.",
            video: "",
            nota: ""
          }
        ]
      },
      {
        name: "Treino B — Superiores (Ênfase em Puxadas, Adaptar Peitorais)",
        exercises: [
          {
            nome: "Puxada Frontal",
            tipo: "Máquina",
            series: "3 séries de 12–15 reps",
            foco: "Puxada com menor impacto no peitoral",
            tecnica: "🩷 Prefira puxadas a empurradas nesta fase — menos pressão e impacto nos seios. Carga mais leve, foco na contração dorsal.",
            explicacao: "Dorsais e escápulas podem ser trabalhados intensamente sem causar desconforto nos seios.",
            video: "",
            nota: ""
          },
          {
            nome: "Remada na Máquina (Seated Row)",
            tipo: "Máquina",
            series: "3 séries de 12–15 reps",
            foco: "Costas médias — sem pressão no peitoral",
            tecnica: "Puxar para o umbigo com controle. 🩷 Movimento não pressiona os seios — ótima escolha para esta fase.",
            explicacao: "Trabalha o dorsal médio e romboides sem qualquer impacto na região peitoral.",
            video: "",
            nota: ""
          },
          {
            nome: "Supino Vertical na Máquina (Chest Press)",
            tipo: "Máquina",
            series: "3 séries de 12–15 reps",
            foco: "🩷 Substitui a flexão de braços — menor impacto nos seios",
            tecnica: "🩷 Substitui a flexão de braços no solo. A máquina reduz a amplitude e o impacto no peitoral. Carga leve a moderada.",
            explicacao: "Recomendado para substituir exercícios como flexão de braços que causam impacto ou pressão no peitoral durante a TPM.",
            video: "",
            nota: ""
          },
          {
            nome: "Elevação Lateral (Halteres Leves)",
            tipo: "Peso Livre",
            series: "3 séries de 12–15 reps",
            foco: "Deltoide lateral — sem pressão nos seios",
            tecnica: "🌡️ Pesos leves. Elevação suave até a altura dos ombros. Sem movimentos bruscos.",
            explicacao: "Trabalha os ombros laterais sem pressão na região do peitoral. Mantém o tônus sem sobrecarga.",
            video: "",
            nota: ""
          },
          {
            nome: "Rosca Direta (Halteres Leves)",
            tipo: "Peso Livre",
            series: "3 séries de 12–15 reps",
            foco: "Bíceps — movimento isolado e confortável",
            tecnica: "Peso leve. Foco no controle e na contração. Sem balanço do tronco.",
            explicacao: "Mantém o trabalho dos bíceps sem qualquer impacto nos seios ou exigência excessiva do core.",
            video: "",
            nota: ""
          },
          {
            nome: "Extensão de Tríceps na Polia",
            tipo: "Máquina",
            series: "3 séries de 12–15 reps",
            foco: "Tríceps — isolamento confortável",
            tecnica: "🩷 Substitui os dips, que pressionam o peitoral. Manter cotovelos fixos ao lado do corpo.",
            explicacao: "Substitui os dips e as flexões pesadas, que causariam desconforto nos seios. Mantém o trabalho do tríceps.",
            video: "",
            nota: ""
          }
        ]
      },
      {
        name: "Treino C — Mobilidade + Resistência Leve",
        exercises: [
          {
            nome: "Caminhada ou Bicicleta Ergométrica",
            tipo: "Cardio Leve",
            series: "20–30 minutos em intensidade baixa",
            foco: "Condicionamento sem sobrecarregar",
            tecnica: "🌡️ Ritmo confortável onde você consegue falar frases completas. Se sentir muito calor, reduza a intensidade.",
            explicacao: "Cardio leve melhora o humor, reduz sintomas da TPM e mantém o condicionamento sem estressar o sistema nervoso.",
            video: "",
            nota: ""
          },
          {
            nome: "Yoga / Alongamento Guiado",
            tipo: "Mobilidade",
            series: "20–30 minutos",
            foco: "Relaxamento e flexibilidade",
            tecnica: "Movimentos lentos, respiração profunda. Sem forçar amplitude além do conforto.",
            explicacao: "Reduz a tensão muscular, melhora o fluxo sanguíneo e alivia cólicas leves. Ótimo para esta fase.",
            video: "",
            nota: ""
          },
          {
            nome: "Alongamento de Quadríceps + Isquiotibiais",
            tipo: "Mobilidade",
            series: "3 séries de 30–60s por lado",
            foco: "Manutenção da mobilidade",
            tecnica: "Sem forçar. Respiração lenta. Parar antes do desconforto virar dor.",
            explicacao: "Mantém a mobilidade conquistada nas semanas anteriores sem exigir esforço muscular elevado.",
            video: "",
            nota: ""
          },
          {
            nome: "Respiração Diafragmática",
            tipo: "Recuperação",
            series: "5–10 minutos",
            foco: "Ativação do sistema nervoso parassimpático",
            tecnica: "Inspirar pelo nariz (4s), segurar (4s), expirar pela boca (6s). Barriga expandindo na inspiração.",
            explicacao: "Reduz o cortisol e o estresse, melhorando a recuperação e aliviando sintomas emocionais da TPM.",
            video: "",
            nota: ""
          }
        ]
      }
    ]
  },

  {
    title: "Semana 4 — Menstruação (Fase Menstrual Inicial)",
    info: "Hormônios baixos • Treino regenerativo no Dia 1 • Retorno gradual nos dias seguintes • 3 séries de 10–12 reps • Intensidade moderada • Descanso: 60–90s",
    workouts: [
      {
        name: "Dia 1 — Descanso Ativo / Mobilidade",
        exercises: [
          {
            nome: "Caminhada Leve",
            tipo: "Cardio Regenerativo",
            series: "20–30 minutos em ritmo tranquilo",
            foco: "Descanso ativo — manter o movimento sem estressar",
            tecnica: "🔴 Se o cansaço for extremo, descanse completamente. Se for treinar, mantenha ritmo de conversa.",
            explicacao: "O descanso ativo no primeiro dia estimula a circulação sem adicionar estresse ao corpo já sobrecarregado pelos hormônios baixos.",
            video: "",
            nota: ""
          },
          {
            nome: "Mobilidade de Quadril (Círculos e 90/90)",
            tipo: "Mobilidade",
            series: "10–15 minutos",
            foco: "Quadril — alívio de cólicas e tensão",
            tecnica: "Movimentos lentos e circulares do quadril. Posição 90/90: sentar com ambas as pernas dobradas a 90º, mudar os lados suavemente.",
            explicacao: "Alivia a tensão pélvica e pode ajudar a reduzir cólicas. Movimento gentil que respeita o corpo neste dia.",
            video: "",
            nota: ""
          },
          {
            nome: "Alongamento de Coluna (Cat-Cow + Torção Deitada)",
            tipo: "Mobilidade",
            series: "2 séries de 10 ciclos cada",
            foco: "Coluna — alívio de tensão lombar",
            tecnica: "Cat-Cow: de 4 apoios, alternar arqueamento e arredondamento da coluna. Torção: deitada, levar os joelhos para um lado, cabeça para o outro.",
            explicacao: "Descomprime a coluna lombar, frequentemente tensa durante a menstruação. Promove relaxamento geral.",
            video: "",
            nota: ""
          },
          {
            nome: "Respiração Diafragmática + Meditação",
            tipo: "Recuperação",
            series: "10–15 minutos",
            foco: "Recuperação do sistema nervoso",
            tecnica: "Deitar de costas, mãos na barriga. Respirar lentamente, expandindo o abdômen. Segurar 4s, expirar 6s.",
            explicacao: "🔴 Se preferir: descanse completamente. O descanso total é igualmente válido e respeitoso com o corpo neste dia.",
            video: "",
            nota: ""
          }
        ]
      },
      {
        name: "Treino A — Retorno Gradual: Inferiores + Core",
        exercises: [
          {
            nome: "Agachamento Livre",
            tipo: "Calistenia",
            series: "3 séries de 10–12 reps",
            foco: "Retorno à normalidade — contração consciente",
            tecnica: "Carga moderada. Foco na contração muscular e no movimento limpo. Prepare o corpo para a progressão da Semana 1.",
            explicacao: "Retome a rotina com atenção à qualidade do movimento. Esta semana é de transição, não de recordes.",
            video: "",
            nota: ""
          },
          {
            nome: "Leg Press 45º",
            tipo: "Máquina",
            series: "3 séries de 10–12 reps",
            foco: "Força base — retorno gradual de carga",
            tecnica: "Carga moderada, confortável. Sem tentar bater marcas da Semana 1 ou 2. Execução limpa e controlada.",
            explicacao: "Reconstrói a base de força de forma segura. A energia tende a melhorar ao longo desta semana.",
            video: "",
            nota: ""
          },
          {
            nome: "Stiff com Halteres",
            tipo: "Peso Livre",
            series: "3 séries de 10–12 reps",
            foco: "Posterior — ativação controlada",
            tecnica: "Peso moderado. Coluna neutra, sentir o alongamento dos isquiotibiais. Sem pressa.",
            explicacao: "Reativa a cadeia posterior de forma gradual. Bom exercício para retornar à intensidade normal sem sobrecarregar.",
            video: "",
            nota: ""
          },
          {
            nome: "Elevação de Quadril (Hip Thrust)",
            tipo: "Peso Livre",
            series: "3 séries de 10–12 reps",
            foco: "Glúteo — retorno à carga",
            tecnica: "Retome a carga com que se sentia confortável na Semana 3. Aumente apenas se sentir que o corpo responde bem.",
            explicacao: "Reconectar com o trabalho glúteo de forma progressiva. Prepare o terreno para a progressão de carga da próxima semana.",
            video: "",
            nota: ""
          },
          {
            nome: "Hollow Body Hold",
            tipo: "Calistenia",
            series: "3 séries de 20–30 segundos",
            foco: "Core — reativação",
            tecnica: "Tempo moderado, sem forçar. Apenas reativar a tensão corporal que será intensificada na Semana 1.",
            explicacao: "Retorno gradual ao core. Mantém a base de calistenia ativa enquanto o corpo se recupera hormonalmente.",
            video: "",
            nota: ""
          }
        ]
      },
      {
        name: "Treino B — Retorno Gradual: Superiores",
        exercises: [
          {
            nome: "Puxada Frontal",
            tipo: "Máquina",
            series: "3 séries de 10–12 reps",
            foco: "Retorno à tração — carga moderada",
            tecnica: "Carga confortável e controlada. Foco na contração dorsal e na retração escapular.",
            explicacao: "Reativa os padrões de tração. A energia tende a melhorar ao longo da semana, então não force no início.",
            video: "",
            nota: ""
          },
          {
            nome: "Remada na Máquina",
            tipo: "Máquina",
            series: "3 séries de 10–12 reps",
            foco: "Costas — retorno gradual",
            tecnica: "Peso moderado, foco no movimento limpo e na contração das escápulas.",
            explicacao: "Mantém o trabalho de costas ativo enquanto o corpo se readapta. Transitando para a intensidade da Semana 1.",
            video: "",
            nota: ""
          },
          {
            nome: "Flexão de Braços",
            tipo: "Calistenia",
            series: "3 séries de 10–12 reps",
            foco: "Peitoral + Core — retorno ao peso corporal",
            tecnica: "Se sentir pesada, faça com joelhos apoiados. Progrida ao longo da semana conforme a energia melhora.",
            explicacao: "Reativa os padrões de empurrar. Começar com versão modificada é totalmente válido e inteligente.",
            video: "",
            nota: ""
          },
          {
            nome: "Desenvolvimento de Ombros (Halteres Moderados)",
            tipo: "Peso Livre",
            series: "3 séries de 10–12 reps",
            foco: "Ombros — retorno à carga",
            tecnica: "Carga moderada, confortável. Executar com controle, sem compensações.",
            explicacao: "Reintroduz o trabalho de ombros de forma gradual, preparando para a intensidade crescente da próxima semana.",
            video: "",
            nota: ""
          },
          {
            nome: "Scapular Push-up",
            tipo: "Calistenia",
            series: "3 séries de 10–15 reps",
            foco: "Escápula — manutenção da saúde articular",
            tecnica: "Mover apenas as escápulas, sem dobrar cotovelos. Movimento pequeno e consciente.",
            explicacao: "Mantém a saúde dos ombros e a consciência escapular ativa, fundamental para a progressão contínua na calistenia.",
            video: "",
            nota: ""
          },
          {
            nome: "Alongamento Final + Respiração",
            tipo: "Recuperação",
            series: "10 minutos ao final de cada treino",
            foco: "Recuperação e transição para a Semana 1",
            tecnica: "Focar nos grupos musculares trabalhados. Respiração lenta e profunda em cada posição.",
            explicacao: "Encerra o ciclo com cuidado. A próxima Semana 1 traz nova energia e oportunidade de progressão.",
            video: "",
            nota: ""
          }
        ]
      }
    ]
  }
];

function createCard(exercise) {

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-top">
      <input type="checkbox" />
      <div class="card-title">${exercise.nome}</div>
    </div>

    <div class="meta">
      Tipo: ${exercise.tipo}<br>
      Foco: ${exercise.foco}<br>
      ${exercise.series ? `<strong>${exercise.series}</strong>` : ""}
    </div>

    <div class="section">
      <div class="section-title">Técnica</div>
      ${exercise.tecnica}
    </div>

    <div class="section">
      <div class="section-title">Por que ajuda na calistenia</div>
      ${exercise.explicacao}
    </div>

    <div class="section">
      <div class="section-title">Vídeo</div>
      <input type="text" placeholder="colar link" />
    </div>

    <div class="section">
      <div class="section-title">Nota pessoal</div>
      <textarea placeholder="como foi hoje?"></textarea>
    </div>
  `;

  return card;
}

function renderApp() {

  weeks.forEach((week) => {

    const weekDiv = document.createElement("div");
    weekDiv.className = "week";

    weekDiv.innerHTML = `
      <div class="week-title">${week.title}</div>
      <div class="week-info">${week.info}</div>
    `;

    week.workouts.forEach((workout) => {

      const workoutDiv = document.createElement("div");
      workoutDiv.className = "workout";

      const header = document.createElement("div");
      header.className = "workout-header";
      header.innerHTML = `<h2>${workout.name}</h2>`;

      const content = document.createElement("div");
      content.className = "workout-content";

      header.addEventListener("click", () => {
        const visible = content.style.display === "block";
        content.style.display = visible ? "none" : "block";
      });

      workout.exercises.forEach((exercise) => {
        content.appendChild(createCard(exercise));
      });

      const addButton = document.createElement("button");
      addButton.className = "add-button";
      addButton.innerText = "+ Novo exercício";

      addButton.addEventListener("click", () => {
        const newExercise = {
          nome: "Novo exercício",
          tipo: "Máquina",
          series: "",
          foco: "",
          tecnica: "",
          explicacao: "",
          video: "",
          nota: ""
        };
        content.insertBefore(createCard(newExercise), addButton);
      });

      content.appendChild(addButton);

      workoutDiv.appendChild(header);
      workoutDiv.appendChild(content);
      weekDiv.appendChild(workoutDiv);
    });

    app.appendChild(weekDiv);
  });
}

renderApp();
