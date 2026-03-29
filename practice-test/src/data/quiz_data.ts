export interface Question {
    id: number;
    chapter: number;
    topic: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export const quizData: Question[] = [
    {
        id: 1, chapter: 1, topic: "Linear Regression",
        question: "In linear regression, what is the purpose of the cost function J(θ)?",
        options: [
            "To maximize the likelihood of the training data",
            "To measure how close the predictions h(x) are to the actual values y",
            "To choose the optimal learning rate α",
            "To normalize the input features x"
        ],
        correctIndex: 1,
        explanation: "The cost function J(θ) measures the squared error between the predictions h(x) and the actual values y. Minimizing this function finds the best parameters θ."
    },
    {
        id: 2, chapter: 1, topic: "Linear Regression",
        question: "Which algorithm updates parameters by looking at the entire training set at once?",
        options: [
            "Stochastic Gradient Descent",
            "Mini-batch Gradient Descent",
            "Batch Gradient Descent",
            "Newton's Method"
        ],
        correctIndex: 2,
        explanation: "Batch Gradient Descent sums the gradient over all training examples before making a single update to the parameters."
    },
    {
        id: 3, chapter: 2, topic: "Logistic Regression",
        question: "What is the range of the sigmoid (logistic) function g(z) = 1 / (1 + e^-z)?",
        options: [
            "[-1, 1]",
            "[0, 1]",
            "(-inf, +inf)",
            "[0, +inf)"
        ],
        correctIndex: 1,
        explanation: "The sigmoid function maps any real-valued input z to a value between 0 and 1, making it ideal for modeling probabilities."
    },
    {
        id: 4, chapter: 2, topic: "Logistic Regression",
        question: "Compared to Gradient Descent, Newton's Method generally requires:",
        options: [
            "More iterations but less computation per iteration",
            "Fewer iterations but more computation per iteration",
            "Fewer iterations and less computation per iteration",
            "A larger learning rate"
        ],
        correctIndex: 1,
        explanation: "Newton's Method converges in fewer iterations (quadratic convergence) but requires computing and inverting the Hessian matrix, which is expensive."
    },
    {
        id: 5, chapter: 3, topic: "Generalized Linear Models",
        question: "In the context of GLMs, what is the natural parameter η?",
        options: [
            "The expected value of the target variable",
            "The linear combination of inputs θ^T x",
            "The dispersion parameter",
            "The sufficient statistic"
        ],
        correctIndex: 1,
        explanation: "A key design choice in GLMs is that the natural parameter η is related linearly to the inputs: η = θ^T x."
    },
    {
        id: 6, chapter: 3, topic: "Generalized Linear Models",
        question: "Which distribution is used in GLMs to derive Logistic Regression?",
        options: [
            "Gaussian",
            "Poisson",
            "Bernoulli",
            "Multinomial"
        ],
        correctIndex: 2,
        explanation: "Logistic regression arises as a GLM when we assume the target variable y follows a Bernoulli distribution."
    },
    {
        id: 7, chapter: 4, topic: "Generative Learning",
        question: "What is the main difference between discriminative and generative algorithms?",
        options: [
            "Discriminative models p(x|y), Generative models p(y|x)",
            "Discriminative models p(y|x), Generative models p(x|y) and p(y)",
            "Discriminative models are always linear",
            "Generative models are always faster to train"
        ],
        correctIndex: 1,
        explanation: "Discriminative algorithms model p(y|x) directly. Generative algorithms model p(x|y) and p(y) to derive p(y|x) via Bayes' Rule."
    },
    {
        id: 8, chapter: 4, topic: "Generative Learning",
        question: "In Naive Bayes, what is the 'Naive' assumption?",
        options: [
            "The features x_i are independent",
            "The features x_i are conditionally independent given the label y",
            "The labels y are uniformly distributed",
            "The training set is very small"
        ],
        correctIndex: 1,
        explanation: "Naive Bayes assumes that the input features x_i are conditionally independent of each other given the class label y."
    },
    {
        id: 9, chapter: 5, topic: "Kernel Methods",
        question: "The 'Kernel Trick' allows us to:",
        options: [
            "Reduce the number of parameters in a linear model",
            "Operate in high-dimensional feature spaces without computing ϕ(x) explicitly",
            "Faster training of deep neural networks",
            "Avoid the need for regularization"
        ],
        correctIndex: 1,
        explanation: "The kernel trick enables algorithms to compute the inner product ⟨ϕ(x), ϕ(z)⟩ in a high-dimensional space efficiently using a kernel function K(x, z)."
    },
    {
        id: 10, chapter: 5, topic: "Kernel Methods",
        question: "What is the value of K(x, z) for a feature map ϕ?",
        options: [
            "The Euclidean distance ||ϕ(x) - ϕ(z)||",
            "The inner product ⟨ϕ(x), ϕ(z)⟩",
            "The ratio of their norms",
            "The gradient of the cost function"
        ],
        correctIndex: 1,
        explanation: "By definition, a kernel function K(x, z) computes the inner product between the mapped feature vectors: K(x, z) = ⟨ϕ(x), ϕ(z)⟩."
    },
    {
        id: 11, chapter: 6, topic: "Support Vector Machines",
        question: "The goal of an Optimal Margin Classifier (SVM) is to:",
        options: [
            "Minimize the training error at all costs",
            "Maximize the geometric margin between classes",
            "Perform dimensionality reduction",
            "Find the cluster centroids"
        ],
        correctIndex: 1,
        explanation: "SVMs seek a decision boundary that maximizes the distance (margin) to the nearest training examples of each class."
    },
    {
        id: 12, chapter: 6, topic: "Support Vector Machines",
        question: "What are 'Support Vectors'?",
        options: [
            "The weights w in the hypothesis",
            "The training examples closest to the decision boundary",
            "The bias term b",
            "The Lagrange multipliers α"
        ],
        correctIndex: 1,
        explanation: "Support vectors are the training examples that lie exactly on the margin boundaries; they alone define the optimal decision boundary."
    },
    {
        id: 13, chapter: 7, topic: "Deep Learning",
        question: "What algorithm is used to efficiently compute gradients in a neural network?",
        options: [
            "Forward Propagation",
            "Newton's Method",
            "Backpropagation",
            "K-means"
        ],
        correctIndex: 2,
        explanation: "Backpropagation uses the chain rule to propagate the error backwards from the output layer to update weights throughout the network."
    },
    {
        id: 14, chapter: 7, topic: "Deep Learning",
        question: "Which activation function is commonly used for multi-class classification in the output layer?",
        options: [
            "Sigmoid",
            "ReLU",
            "Softmax",
            "Tanh"
        ],
        correctIndex: 2,
        explanation: "Softmax is used to normalize the output into a probability distribution over multiple mutually exclusive classes."
    },
    {
        id: 15, chapter: 8, topic: "Generalization",
        question: "The 'Generalization Gap' refers to the difference between:",
        options: [
            "Bias and Variance",
            "Training error and Test error",
            "L1 and L2 regularization",
            "The number of parameters and the number of samples"
        ],
        correctIndex: 1,
        explanation: "The generalization gap is the difference between the model's performance on the training set and its performance on unseen test data."
    },
    {
        id: 16, chapter: 8, topic: "Generalization",
        question: "A model with high bias and low variance is likely:",
        options: [
            "Overfitting",
            "Underfitting",
            "Perfectly trained",
            "Too complex"
        ],
        correctIndex: 1,
        explanation: "High bias indicates the model is too simple to capture the underlying patterns in the data, leading to underfitting."
    },
    {
        id: 17, chapter: 9, topic: "Regularization",
        question: "How does L2 regularization (weight decay) affect the model parameters?",
        options: [
            "It forces parameters to be exactly zero",
            "It shrinks parameters towards zero by adding a penalty proportional to ||θ||^2",
            "It increases the variance of the model",
            "It replaces gradient descent with Newton's Method"
        ],
        correctIndex: 1,
        explanation: "L2 regularization adds a penalty based on the squared magnitude of the weights, encouraging the optimizer to find smaller parameter values."
    },
    {
        id: 18, chapter: 9, topic: "Regularization",
        question: "L1 regularization (LASSO) is known for promoting:",
        options: [
            "High variance",
            "Sparsity (many parameters become exactly zero)",
            "Smoothness",
            "Implicit bias"
        ],
        correctIndex: 1,
        explanation: "L1 regularization encourages many weights to become exactly zero, effectively performing feature selection."
    },
    {
        id: 19, chapter: 10, topic: "Clustering",
        question: "K-means clustering is an iterative algorithm that repeats which two steps?",
        options: [
            "Sampling and Weighting",
            "Assignment and Update",
            "Forward and Backward pass",
            "Selection and Mutation"
        ],
        correctIndex: 1,
        explanation: "K-means alternates between assigning points to the nearest centroid and updating the centroids to the mean of their assigned points."
    },
    {
        id: 20, chapter: 10, topic: "Clustering",
        question: "In K-means, how are points assigned to clusters?",
        options: [
            "Based on their class labels",
            "By minimizing the distance to the cluster centroid",
            "Randomly at each step",
            "Using Bayes' Rule"
        ],
        correctIndex: 1,
        explanation: "In the assignment step, each data point is assigned to the cluster whose centroid is closest to it (usually by Euclidean distance)."
    },
    {
        id: 21, chapter: 11, topic: "EM Algorithm",
        question: "The EM algorithm is used for models with:",
        options: [
            "Only labeled data",
            "Latent (hidden) variables",
            "Very few parameters",
            "Linear boundaries only"
        ],
        correctIndex: 1,
        explanation: "The Expectation-Maximization (EM) algorithm is a general technique for maximum likelihood estimation in models with latent/unobserved variables."
    },
    {
        id: 22, chapter: 11, topic: "EM Algorithm",
        question: "What happens in the M-step of the EM algorithm?",
        options: [
            "We estimate the values of the latent variables",
            "We update the model parameters to maximize the expected log-likelihood",
            "We sample from the posterior distribution",
            "We normalize the data"
        ],
        correctIndex: 1,
        explanation: "In the Maximization (M) step, we optimize the model parameters to maximize the likelihood given the 'guesses' made in the E-step."
    },
    {
        id: 23, chapter: 12, topic: "PCA",
        question: "Principal Components Analysis (PCA) finds directions that maximize:",
        options: [
            "The training error",
            "The variance of the projected data",
            "The distance between class means",
            "The number of features"
        ],
        correctIndex: 1,
        explanation: "PCA identifies the orthogonal directions (principal components) along which the data exhibits the most variation."
    },
    {
        id: 24, chapter: 12, topic: "PCA",
        question: "Before running PCA, it is standard practice to:",
        options: [
            "Shuffle the data",
            "Normalize features to have mean 0 and variance 1",
            "Increase the dimensionality of the data",
            "Add noise to the data"
        ],
        correctIndex: 1,
        explanation: "Normalization ensures that all features are treated on the same scale, preventing features with large magnitudes from dominating the PCA."
    },
    {
        id: 25, chapter: 13, topic: "ICA",
        question: "Independent Components Analysis (ICA) aims to recover sources that are:",
        options: [
            "Correlated",
            "Statistically independent and non-Gaussian",
            "Normally distributed",
            "Orthogonal"
        ],
        correctIndex: 1,
        explanation: "ICA assumes that the observed data is a mixture of independent, non-Gaussian sources."
    },
    {
        id: 26, chapter: 13, topic: "ICA",
        question: "The 'Cocktail Party Problem' is a classic example of:",
        options: [
            "Supervised Learning",
            "Source Separation (ICA)",
            "Clustering",
            "Deep Learning"
        ],
        correctIndex: 1,
        explanation: "The cocktail party problem involves separating multiple overlapping voice signals from multiple microphone recordings."
    },
    {
        id: 27, chapter: 14, topic: "Self-Supervised Learning",
        question: "What is 'Zero-shot Learning' in the context of foundation models?",
        options: [
            "Training a model with zero parameters",
            "Adapting to a task with zero labeled examples",
            "Achieving zero training error",
            "Using only binary features"
        ],
        correctIndex: 1,
        explanation: "Zero-shot learning is the ability of a pretrained model to perform a downstream task without seeing any labeled examples for that task."
    },
    {
        id: 28, chapter: 14, topic: "Self-Supervised Learning",
        question: "Contrastive learning works by:",
        options: [
            "Maximizing the difference between all images",
            "Mapping semantically similar images to similar representations",
            "Using only human-provided labels",
            "Reducing the model width"
        ],
        correctIndex: 1,
        explanation: "Contrastive learning encourages similar images (e.g., augmentations of the same image) to have similar embeddings and dissimilar ones to be far apart."
    },
    {
        id: 29, chapter: 15, topic: "Reinforcement Learning",
        question: "In a Markov Decision Process (MDP), the discount factor γ (gamma) determines:",
        options: [
            "The learning rate of the agent",
            "The importance of future rewards compared to immediate rewards",
            "The number of actions available",
            "The size of the state space"
        ],
        correctIndex: 1,
        explanation: "A smaller γ makes the agent more short-sighted (valuing immediate rewards), while a γ closer to 1 encourages long-term planning."
    },
    {
        id: 30, chapter: 15, topic: "Reinforcement Learning",
        question: "What do the Bellman equations describe?",
        options: [
            "The relationship between value functions of current and successor states",
            "The optimal weight initialization for a neural network",
            "The gradient of the loss function",
            "The probability of a state transition"
        ],
        correctIndex: 0,
        explanation: "The Bellman equations express the value of a state as the immediate reward plus the discounted expected value of the next state."
    },
    {
        id: 31, chapter: 16, topic: "LQR and Control",
        question: "Linear Quadratic Regulation (LQR) assumes:",
        options: [
            "Non-linear transitions and linear rewards",
            "Linear transitions and quadratic rewards",
            "Constant rewards and random actions",
            "Zero noise in the system"
        ],
        correctIndex: 1,
        explanation: "LQR is an optimization framework for systems with linear dynamics and a quadratic cost/reward function."
    },
    {
        id: 32, chapter: 16, topic: "LQR and Control",
        question: "The Kalman Filter is used in LQG to:",
        options: [
            "Maximize the reward directly",
            "Estimate the hidden state from noisy observations",
            "Discretize the state space",
            "Regularize the weights"
        ],
        correctIndex: 1,
        explanation: "In Linear Quadratic Gaussian (LQG) control, the Kalman Filter maintains a belief state by estimating the true state from noisy measurements."
    },
    {
        id: 33, chapter: 17, topic: "Policy Gradient",
        question: "The REINFORCE algorithm updates the policy parameters by:",
        options: [
            "Solving the Bellman equations exactly",
            "Using gradient ascent to maximize expected reward",
            "Minimizing the mean squared error of the value function",
            "Randomly perturbing the weights"
        ],
        correctIndex: 1,
        explanation: "REINFORCE is a policy gradient method that directly optimizes the policy by moving parameters in the direction of higher expected returns."
    },
    {
        id: 34, chapter: 17, topic: "Policy Gradient",
        question: "What is the role of a 'baseline' in policy gradient methods?",
        options: [
            "To set the minimum possible reward",
            "To reduce the variance of the gradient estimator",
            "To simplify the state space",
            "To avoid the use of log-probabilities"
        ],
        correctIndex: 1,
        explanation: "Baselines (like the value function) are subtracted from the returns to reduce variance in the gradient estimates without changing the mean."
    }
];
