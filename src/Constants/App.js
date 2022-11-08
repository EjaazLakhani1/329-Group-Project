import logo from '../logo.svg'
import { wordlists } from '../Ejaaz/wordlists';

export const SECTION_CONTENT = {
  'Ejaaz': {
    'id': 1,
    'contents': [
      wordlists,
      wordlists,
      wordlists,
      wordlists,
    ]
  },
  'Habiba': {
    'id': 1,
    'contents': [
      wordlists,
      wordlists,
      wordlists,
      wordlists,
    ]
  },
  'Colton': {
    'id': 1,
    'contents': [
      wordlists,
      wordlists,
      wordlists,
      wordlists,
    ]
  },
  'Dante': {
    'id': 1,
    'contents': [
      wordlists,
      wordlists,
      wordlists,
      wordlists,
    ]
  },
  'Auric': {
    'id': 1,
    'contents': [
      wordlists,
      wordlists,
      wordlists,
      wordlists,
    ]
  },
}

export const PATHS = {
  'Ejaaz': {
    'id': 1,
    'topic': 'password-cracking',
    'subtopics': [
      'wordlists',
      'intro-to-hashcat',
      'what-are-hashes',
      'cracking-hashes',
    ]
  },
  'Habiba': {
    'id': 2,
    'topic': 'social-engineering',
    'subtopics': [
      'wordlists',
      'intro-to-hashcat',
      'what-are-hashes',
      'cracking-hashes',
    ]
  },
  'Dante': {
    'id': 3,
    'topic': 'reverse-engineering',
    'subtopics': [
      'wordlists',
      'intro-to-hashcat',
      'what-are-hashes',
      'cracking-hashes',
    ]
  },
  'Colton': {
    'id': 4,
    'topic': 'how-to-protect-yourself-on-the-internet',
    'subtopics': [
      'wordlists',
      'intro-to-hashcat',
      'what-are-hashes',
      'cracking-hashes',
    ]
  },
  'Auric': {
    'id': 5,
    'topic': 'web-exploits',
    'subtopics': [
      'wordlists',
      'intro-to-hashcat',
      'what-are-hashes',
      'cracking-hashes',
    ]
  }
}

export const SECTIONS = {
  'Ejaaz': {
    'id': 1,
    'topic': 'Password Cracking',
    'author': 'Ejaaz',
    'image': logo,
    'subtopics': [
      'Wordlists',
      'Intro to Hashcat',
      'What are Hashes',
      'Cracking Hashes',
    ],
    'paths': PATHS.Ejaaz,
    'content': SECTION_CONTENT.Ejaaz
  },
  'Habiba': {
    'id': 2,
    'topic': 'Social Engineering',
    'author': 'Habiba',
    'image': logo,
    'subtopics': [
      'Wordlists',
      'Intro to Hashcat',
      'What are Hashes',
      'Cracking Hashes',
    ],
    'paths': PATHS,
    'content': SECTION_CONTENT.Habiba
  },
  'Dante': {
    'id': 3,
    'topic': 'Reverse Engineering',
    'author': 'Dante',
    'image': logo,
    'subtopics': [
      'Wordlists',
      'Intro to Hashcat',
      'What are Hashes',
      'Cracking Hashes',
    ],
    'paths': PATHS.Dante,
    'content': SECTION_CONTENT.Dante
  },
  'Colton': {
    'id': 4,
    'topic': 'How to Protect Yourself on the Internet',
    'author': 'Colton',
    'image': logo,
    'subtopics': [
      'Wordlists',
      'Intro to Hashcat',
      'What are Hashes',
      'Cracking Hashes',
    ],
    'paths': PATHS.Colton,
    'content': SECTION_CONTENT.Colton
  },
  'Auric': {
    'id': 5,
    'topic': 'Web Exploits',
    'author': 'Auric',
    'image': logo,
    'subtopics': [
      'Wordlists',
      'Intro to Hashcat',
      'What are Hashes',
      'Cracking Hashes',
    ],
    'paths': PATHS.Auric,
    'content': SECTION_CONTENT.Auric
  }
};