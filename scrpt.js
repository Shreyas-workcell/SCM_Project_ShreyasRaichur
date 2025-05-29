// Quiz data
const questions = [
    {
        id: '1',
        question: 'Which command is used to initialize a new Git repository?',
        answers: [
            { id: 'a', text: 'git start', isCorrect: false },
            { id: 'b', text: 'git init', isCorrect: true },
            { id: 'c', text: 'git create', isCorrect: false },
            { id: 'd', text: 'git new', isCorrect: false }
        ],
        explanation: 'git init creates a new Git repository in the current directory.'
    },
    {
        id: '2',
        question: 'What does the "ls -la" command do in Linux?',
        answers: [
            { id: 'a', text: 'Lists files with detailed information including hidden files', isCorrect: true },
            { id: 'b', text: 'Lists only directories', isCorrect: false },
            { id: 'c', text: 'Lists files in alphabetical order', isCorrect: false },
            { id: 'd', text: 'Lists large files only', isCorrect: false }
        ],
        explanation: 'ls -la shows all files (including hidden ones starting with .) in long format with detailed information.'
    },
    {
        id: '3',
        question: 'Which command moves you to the home directory in bash/zsh?',
        answers: [
            { id: 'a', text: 'cd ~', isCorrect: true },
            { id: 'b', text: 'cd home', isCorrect: false },
            { id: 'c', text: 'cd /home', isCorrect: false },
            { id: 'd', text: 'cd back', isCorrect: false }
        ],
        explanation: 'cd ~ or just cd without arguments will take you to your home directory.'
    },
    {
        id: '4',
        question: 'What does "git status" show you?',
        answers: [
            { id: 'a', text: 'The current branch and working directory status', isCorrect: true },
            { id: 'b', text: 'The commit history', isCorrect: false },
            { id: 'c', text: 'Remote repository information', isCorrect: false },
            { id: 'd', text: 'User configuration', isCorrect: false }
        ],
        explanation: 'git status shows the current branch, staged changes, unstaged changes, and untracked files.'
    },
    {
        id: '5',
        question: 'Which command is used to create a new directory in Linux?',
        answers: [
            { id: 'a', text: 'create dir', isCorrect: false },
            { id: 'b', text: 'mkdir', isCorrect: true },
            { id: 'c', text: 'new folder', isCorrect: false },
            { id: 'd', text: 'make dir', isCorrect: false }
        ],
        explanation: 'mkdir (make directory) creates new directories in Linux/Unix systems.'
    },
    {
        id: '6',
        question: 'What does "git add ." do?',
        answers: [
            { id: 'a', text: 'Adds all changes in current directory to staging area', isCorrect: true },
            { id: 'b', text: 'Adds a single file to staging area', isCorrect: false },
            { id: 'c', text: 'Adds changes to the previous commit', isCorrect: false },
            { id: 'd', text: 'Adds files to the repository', isCorrect: false }
        ],
        explanation: 'git add . stages all changes (new, modified, deleted files) in the current directory and subdirectories.'
    },
    {
        id: '7',
        question: 'Which command displays the current working directory?',
        answers: [
            { id: 'a', text: 'cwd', isCorrect: false },
            { id: 'b', text: 'pwd', isCorrect: true },
            { id: 'c', text: 'dir', isCorrect: false },
            { id: 'd', text: 'path', isCorrect: false }
        ],
        explanation: 'pwd (print working directory) shows the full path of your current location in the filesystem.'
    },
    {
        id: '8',
        question: 'What is the difference between bash and zsh?',
        answers: [
            { id: 'a', text: 'zsh has better autocompletion and customization features', isCorrect: true },
            { id: 'b', text: 'bash is newer than zsh', isCorrect: false },
            { id: 'c', text: 'zsh only works on macOS', isCorrect: false },
            { id: 'd', text: 'There is no difference', isCorrect: false }
        ],
        explanation: 'zsh (Z shell) offers enhanced features like better tab completion, themes, plugins, and improved scripting capabilities compared to bash.'
    },
    {
        id: '9',
        question: 'Which command removes a file in Linux?',
        answers: [
            { id: 'a', text: 'delete', isCorrect: false },
            { id: 'b', text: 'remove', isCorrect: false },
            { id: 'c', text: 'rm', isCorrect: true },
            { id: 'd', text: 'del', isCorrect: false }
        ],
        explanation: 'rm (remove) deletes files and directories in Linux. Use rm -r for directories and rm -f to force deletion.'
    },
    {
        id: '10',
        question: 'What does "git clone" do?',
        answers: [
            { id: 'a', text: 'Creates a copy of a remote repository locally', isCorrect: true },
            { id: 'b', text: 'Creates a new branch', isCorrect: false },
            { id: 'c', text: 'Copies files between directories', isCorrect: false },
            { id: 'd', text: 'Duplicates the current repository', isCorrect: false }
        ],
        explanation: 'git clone downloads a complete copy of a remote repository to your local machine, including all history and branches.'
    }
];

