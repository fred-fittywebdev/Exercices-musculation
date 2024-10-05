const randomQuizData = [
	// Vos 60 nouvelles questions ici
	{
		question:
			"Quel mouvement articulaire éloigne un segment corporel de l'axe médian du corps ?",
		options: ["Flexion", "Extension", "Adduction", "Abduction"],
		correctAnswer: 3,
		reference: "Page 4 - Mouvements articulaires, Abduction/Adduction",
	},
	{
		question:
			"Quel muscle n'est pas sollicité lors de la phase concentrique du développé couché ?",
		options: ["Grand pectoral", "Deltoïde antérieur", "Biceps", "Triceps"],
		correctAnswer: 2,
		reference:
			"Page 10 - Exercices de musculation pour les pectoraux, Développé couché",
	},
	{
		question:
			"Complétez : Lors d'un tirage à la poulie, les épaules subissent principalement une ____.",
		options: ["extension", "abduction", "adduction", "flexion"],
		correctAnswer: 2,
		reference:
			"Page 12 - Exercices de musculation pour le dos, Tirage à la poulie",
	},
	{
		question:
			"Si je veux travailler le faisceau postérieur de mon deltoïde, quel exercice est à privilégier ?",
		options: [
			"Développé militaire",
			"Oiseau avec haltères",
			"Développé couché",
			"Élévations latérales",
		],
		correctAnswer: 1,
		reference:
			"Page 12 - Exercices de musculation pour les deltoïdes, Oiseau avec haltères",
	},
	{
		question:
			"Trouvez l'intrus : Quel exercice ne sollicite pas principalement le grand dorsal ?",
		options: [
			"Tirage vertical",
			"Rowing à la poulie",
			"Développé couché",
			"Tirage menton",
		],
		correctAnswer: 2,
		reference:
			"Page 10 - Exercices de musculation pour les pectoraux, Développé couché",
	},
	{
		question:
			"Dans quel plan se déroulent les mouvements de flexion et d'extension du genou ?",
		options: ["Plan sagittal", "Plan frontal", "Plan transversal"],
		correctAnswer: 0,
		reference: "Page 2 - Plans anatomiques, Plan sagittal",
	},
	{
		question:
			"Quel exercice est le plus approprié pour renforcer les mollets en position debout ?",
		options: [
			"Soulevé de terre",
			"Squat",
			"Extension mollets debout",
			"Curl biceps",
		],
		correctAnswer: 2,
		reference:
			"Page 14 - Exercices de musculation pour les mollets, Extension sur mollets",
	},
	{
		question:
			"Quel mouvement articulaire rapproche un segment corporel de l'axe médian du corps dans le plan frontal ?",
		options: ["Abduction", "Flexion", "Adduction", "Extension"],
		correctAnswer: 2,
		reference: "Page 4 - Mouvements articulaires, Abduction/Adduction",
	},
	{
		question:
			"Quel muscle est principalement sollicité lors de la phase concentrique d'un développé militaire ?",
		options: [
			"Grand pectoral",
			"Deltoïde antérieur",
			"Ischio-jambiers",
			"Triceps",
		],
		correctAnswer: 1,
		reference:
			"Page 12 - Exercices de musculation pour les deltoïdes, Développé militaire",
	},
	{
		question:
			"Quel mouvement articulaire est prédominant lors de la phase concentrique du curl biceps ?",
		options: ["Extension", "Flexion", "Rotation externe", "Adduction"],
		correctAnswer: 1,
		reference:
			"Page 16 - Exercices de musculation pour les bras, Curl biceps",
	},
	{
		question:
			"Complétez : Lors de la phase concentrique du développé couché, l'articulation du coude réalise une ____.",
		options: ["flexion", "extension", "rotation interne", "abduction"],
		correctAnswer: 1,
		reference:
			"Page 10 - Exercices de musculation pour les pectoraux, Développé couché",
	},
	{
		question:
			"Quel exercice sollicite principalement les deltoïdes antérieurs et les triceps ?",
		options: [
			"Tirage menton",
			"Rowing barre T",
			"Développé militaire",
			"Écarté couché",
		],
		correctAnswer: 2,
		reference:
			"Page 12 - Exercices de musculation pour les deltoïdes, Développé militaire",
	},
	{
		question:
			"Trouvez l'intrus : Quel exercice ne sollicite pas les ischio-jambiers ?",
		options: [
			"Squat",
			"Soulevé de terre jambes tendues",
			"Fentes",
			"Curl biceps",
		],
		correctAnswer: 3,
		reference:
			"Page 14 - Exercices de musculation pour les jambes, Soulevé de terre",
	},
	{
		question:
			"Quel mouvement articulaire se produit au niveau de la hanche pendant la phase descendante d'un squat ?",
		options: ["Flexion", "Extension", "Abduction", "Rotation externe"],
		correctAnswer: 0,
		reference: "Page 14 - Exercices de musculation pour les jambes, Squat",
	},
	{
		question:
			"Que fait l'articulation du poignet pendant la phase concentrique d'un soulevé de terre ?",
		options: [
			"Abduction",
			"Flexion",
			"Extension",
			"Aucune, elle reste stabilisée",
		],
		correctAnswer: 3,
		reference:
			"Page 14 - Exercices de musculation pour les jambes, Soulevé de terre",
	},
	{
		question:
			"Complétez : Lors d'un tirage menton, l'articulation de l'épaule réalise une ____.",
		options: ["Abduction", "Extension", "Adduction", "Flexion"],
		correctAnswer: 0,
		reference:
			"Page 12 - Exercices de musculation pour le dos, Tirage menton",
	},
	{
		question:
			"Trouvez l'intrus : Quel exercice ne sollicite pas principalement les deltoïdes ?",
		options: [
			"Élévations latérales",
			"Oiseau avec haltères",
			"Développé couché",
			"Développé militaire",
		],
		correctAnswer: 2,
		reference: "Page 12 - Exercices de musculation pour les deltoïdes",
	},
	{
		question:
			"Quel mouvement articulaire se produit au niveau du genou pendant la phase concentrique d'un squat ?",
		options: ["Extension", "Flexion", "Adduction", "Abduction"],
		correctAnswer: 0,
		reference: "Page 14 - Exercices de musculation pour les jambes, Squat",
	},
	{
		question:
			"Si je veux travailler mes épaules en rotation interne, quel exercice est le plus approprié ?",
		options: [
			"Développé militaire",
			"Oiseau avec haltères",
			"Rowing barre T",
			"Développé Arnold",
		],
		correctAnswer: 3,
		reference:
			"Page 12 - Exercices de musculation pour les deltoïdes, Développé Arnold",
	},
	{
		question:
			"Que fait l'articulation du coude pendant la phase concentrique d'un tirage vertical ?",
		options: ["Flexion", "Extension", "Rotation externe", "Adduction"],
		correctAnswer: 0,
		reference:
			"Page 12 - Exercices de musculation pour le dos, Tirage vertical",
	},
	{
		question:
			"Complétez : Lors d'un développé couché, les pectoraux réalisent une ____ pendant la phase excentrique.",
		options: ["Flexion", "Contraction", "Extension", "Rotation interne"],
		correctAnswer: 2,
		reference:
			"Page 10 - Exercices de musculation pour les pectoraux, Développé couché",
	},
	{
		question:
			"Quel muscle est sollicité lors de la phase concentrique d'un développé militaire ?",
		options: ["Triceps", "Biceps", "Quadriceps", "Grand dorsal"],
		correctAnswer: 0,
		reference:
			"Page 12 - Exercices de musculation pour les deltoïdes, Développé militaire",
	},
	{
		question:
			"Quel mouvement articulaire est prédominant lors de la phase concentrique d'un écarté couché ?",
		options: ["Flexion", "Extension", "Adduction", "Abduction"],
		correctAnswer: 2,
		reference:
			"Page 10 - Exercices de musculation pour les pectoraux, Écarté couché",
	},
	{
		question:
			"Trouvez l'intrus : Quel exercice ne sollicite pas principalement les pectoraux ?",
		options: [
			"Développé couché",
			"Écarté couché",
			"Oiseau avec haltères",
			"Pompes",
		],
		correctAnswer: 2,
		reference: "Page 12 - Exercices de musculation pour les pectoraux",
	},
	{
		question:
			"Quel exercice sollicite principalement les ischio-jambiers et les fessiers en phase excentrique ?",
		options: [
			"Squat",
			"Soulevé de terre jambes tendues",
			"Presse à cuisse",
			"Curl biceps",
		],
		correctAnswer: 1,
		reference:
			"Page 14 - Exercices de musculation pour les jambes, Soulevé de terre",
	},
	{
		question:
			"Complétez : Lors d'une extension sur mollets debout, l'articulation de la cheville réalise une ____.",
		options: ["Extension", "Inversion", "Flexion plantaire", "Adduction"],
		correctAnswer: 2,
		reference: "Page 14 - Exercices de musculation pour les mollets",
	},
	{
		question:
			"Que fait l'articulation de l'épaule pendant la phase concentrique d'un rowing barre T ?",
		options: ["Flexion", "Extension", "Adduction", "Abduction"],
		correctAnswer: 2,
		reference:
			"Page 12 - Exercices de musculation pour le dos, Rowing barre T",
	},
	{
		question:
			"Quel mouvement articulaire est prédominant pendant la phase descendante d'un développé militaire ?",
		options: ["Extension", "Flexion", "Rotation externe", "Abduction"],
		correctAnswer: 1,
		reference:
			"Page 12 - Exercices de musculation pour les deltoïdes, Développé militaire",
	},
	{
		question:
			"Complétez : Lors d'un tirage à la poulie, les bras réalisent une ____ pendant la phase concentrique.",
		options: ["Flexion", "Extension", "Abduction", "Adduction"],
		correctAnswer: 0,
		reference:
			"Page 12 - Exercices de musculation pour le dos, Tirage à la poulie",
	},
	{
		question:
			"Quel muscle n'est pas sollicité lors de la phase concentrique d'un développé couché ?",
		options: [
			"Grand pectoral",
			"Triceps",
			"Deltoïde antérieur",
			"Grand dorsal",
		],
		correctAnswer: 3,
		reference:
			"Page 10 - Exercices de musculation pour les pectoraux, Développé couché",
	},
	{
		question:
			"Que fait l'articulation du genou pendant la phase descendante d'un squat ?",
		options: ["Flexion", "Extension", "Adduction", "Abduction"],
		correctAnswer: 0,
		reference: "Page 14 - Exercices de musculation pour les jambes, Squat",
	},
	{
		question:
			"Quel muscle est principalement sollicité pendant la phase excentrique d'un soulevé de terre jambes tendues ?",
		options: ["Fessiers", "Grand dorsal", "Quadriceps", "Ischio-jambiers"],
		correctAnswer: 3,
		reference:
			"Page 14 - Exercices de musculation pour les jambes, Soulevé de terre",
	},
	{
		question:
			"Complétez : Lors d'un curl biceps, l'articulation du coude réalise une ____ pendant la phase concentrique.",
		options: ["Extension", "Flexion", "Adduction", "Abduction"],
		correctAnswer: 1,
		reference:
			"Page 16 - Exercices de musculation pour les bras, Curl biceps",
	},
	{
		question:
			"Que fait l'articulation de l'épaule pendant la phase concentrique d'un développé couché ?",
		options: ["Extension", "Flexion", "Abduction", "Rotation externe"],
		correctAnswer: 1,
		reference:
			"Page 10 - Exercices de musculation pour les pectoraux, Développé couché",
	},
	{
		question:
			"Trouvez l'intrus : Quel exercice ne sollicite pas les quadriceps ?",
		options: ["Squat", "Presse à cuisse", "Développé couché", "Fentes"],
		correctAnswer: 2,
		reference: "Page 14 - Exercices de musculation pour les jambes, Squat",
	},
	{
		question:
			"Si je veux travailler mes épaules en abduction, quel exercice est le plus approprié ?",
		options: [
			"Développé militaire",
			"Oiseau avec haltères",
			"Élévations latérales",
			"Développé couché",
		],
		correctAnswer: 2,
		reference:
			"Page 12 - Exercices de musculation pour les deltoïdes, Élévations latérales",
	},
	{
		question:
			"Quel mouvement articulaire éloigne un segment corporel de l'axe médian du corps dans le plan frontal ?",
		options: ["Abduction", "Adduction", "Extension", "Flexion"],
		correctAnswer: 0,
		reference: "Page 4 - Mouvements articulaires, Abduction/Adduction",
	},
	{
		question:
			"Quel exercice est le plus approprié pour renforcer les fessiers et les ischio-jambiers ?",
		options: [
			"Curl biceps",
			"Développé militaire",
			"Soulevé de terre jambes tendues",
			"Presse à cuisse",
		],
		correctAnswer: 2,
		reference:
			"Page 14 - Exercices de musculation pour les jambes, Soulevé de terre",
	},
	{
		question:
			"Que fait l'articulation du coude pendant la phase concentrique d'un développé militaire ?",
		options: ["Flexion", "Extension", "Adduction", "Abduction"],
		correctAnswer: 1,
		reference:
			"Page 12 - Exercices de musculation pour les deltoïdes, Développé militaire",
	},
	{
		question:
			"Complétez : Lors de la phase concentrique d'un tirage vertical, l'articulation de l'épaule réalise une ____.",
		options: ["Flexion", "Adduction", "Extension", "Rotation externe"],
		correctAnswer: 1,
		reference:
			"Page 12 - Exercices de musculation pour le dos, Tirage vertical",
	},
	{
		question:
			"Trouvez l'intrus : Quel exercice ne sollicite pas le grand dorsal ?",
		options: [
			"Rowing à la poulie",
			"Tirage menton",
			"Développé couché",
			"Tirage vertical",
		],
		correctAnswer: 2,
		reference: "Page 10 - Exercices de musculation pour les pectoraux",
	},
	{
		question:
			"Quel muscle est principalement sollicité lors de la phase concentrique d'un curl biceps ?",
		options: [
			"Triceps",
			"Biceps brachial",
			"Grand pectoral",
			"Deltoïdes postérieurs",
		],
		correctAnswer: 1,
		reference:
			"Page 16 - Exercices de musculation pour les bras, Curl biceps",
	},
	{
		question:
			"Si je veux travailler mes épaules en rotation externe, quel exercice est à privilégier ?",
		options: [
			"Oiseau avec haltères",
			"Développé couché",
			"Tirage vertical",
			"Rowing barre T",
		],
		correctAnswer: 0,
		reference: "Page 12 - Exercices de musculation pour les deltoïdes",
	},
	{
		question:
			"Complétez : Pendant un développé militaire, l'articulation du coude subit une ____ pendant la phase concentrique.",
		options: ["Flexion", "Extension", "Adduction", "Abduction"],
		correctAnswer: 1,
		reference:
			"Page 12 - Exercices de musculation pour les deltoïdes, Développé militaire",
	},
	{
		question:
			"Quel mouvement articulaire se produit au niveau de la hanche pendant la phase excentrique d'un soulevé de terre ?",
		options: ["Flexion", "Extension", "Adduction", "Rotation externe"],
		correctAnswer: 0,
		reference:
			"Page 14 - Exercices de musculation pour les jambes, Soulevé de terre",
	},
	{
		question:
			"Que fait l'articulation de l'épaule pendant la phase excentrique d'un tirage vertical ?",
		options: ["Extension", "Abduction", "Flexion", "Adduction"],
		correctAnswer: 1,
		reference:
			"Page 12 - Exercices de musculation pour le dos, Tirage vertical",
	},
	{
		question:
			"Quel mouvement articulaire est prédominant pendant la phase concentrique du curl biceps ?",
		options: ["Flexion", "Extension", "Abduction", "Adduction"],
		correctAnswer: 0,
		reference:
			"Page 16 - Exercices de musculation pour les bras, Curl biceps",
	},
	{
		question:
			"Si je veux travailler les pectoraux en phase excentrique, quel exercice est le plus adapté ?",
		options: [
			"Écarté couché",
			"Rowing à la poulie",
			"Pompes",
			"Tirage menton",
		],
		correctAnswer: 0,
		reference:
			"Page 10 - Exercices de musculation pour les pectoraux, Écarté couché",
	},
	{
		question:
			"Complétez : Lors d'un tirage à la poulie, l'articulation du coude réalise une ____ pendant la phase concentrique.",
		options: ["Extension", "Flexion", "Abduction", "Rotation externe"],
		correctAnswer: 1,
		reference:
			"Page 12 - Exercices de musculation pour le dos, Tirage à la poulie",
	},
	{
		question:
			"Que fait l'articulation du genou pendant la phase excentrique d'un squat ?",
		options: ["Flexion", "Extension", "Adduction", "Rotation interne"],
		correctAnswer: 0,
		reference: "Page 14 - Exercices de musculation pour les jambes, Squat",
	},
	{
		question:
			"Quel exercice est le plus approprié pour renforcer le faisceau postérieur des deltoïdes ?",
		options: [
			"Oiseau avec haltères",
			"Développé couché",
			"Tirage vertical",
			"Rowing barre T",
		],
		correctAnswer: 0,
		reference: "Page 12 - Exercices de musculation pour les deltoïdes",
	},
	{
		question:
			"Trouvez l'intrus : Quel exercice ne sollicite pas principalement les quadriceps ?",
		options: ["Squat", "Presse à cuisse", "Développé couché", "Fentes"],
		correctAnswer: 2,
		reference: "Page 14 - Exercices de musculation pour les jambes",
	},
	{
		question:
			"Que fait l'articulation de l'épaule pendant la phase concentrique d'un développé couché ?",
		options: ["Flexion", "Extension", "Adduction", "Abduction"],
		correctAnswer: 1,
		reference:
			"Page 10 - Exercices de musculation pour les pectoraux, Développé couché",
	},
	{
		question:
			"Quel muscle est principalement sollicité lors de la phase concentrique d'un tirage vertical ?",
		options: [
			"Grand dorsal",
			"Triceps",
			"Quadriceps",
			"Deltoïde postérieur",
		],
		correctAnswer: 0,
		reference:
			"Page 12 - Exercices de musculation pour le dos, Tirage vertical",
	},
	// ... 59 autres questions ...
];
