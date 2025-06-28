# Wysa Sleep Backend API

A Node.js backend for Wysa Sleep's onboarding flow with analytics tracking, built with Express, MongoDB, and JWT authentication.

## Features

- User authentication (JWT)
- Onboarding flow management
- Drop-off analytics tracking
- RESTful API design
- MongoDB data storage

## API Endpoints

### Authentication
| Endpoint       | Method | Description               | Request Body                          |
|----------------|--------|---------------------------|---------------------------------------|
| `/auth/register` | POST   | Register new user         | `{ "nickname": "...", "password": "..." }` |
| `/auth/login`    | POST   | Login user                | `{ "nickname": "...", "password": "..." }` |

### Onboarding
| Endpoint            | Method | Description               | Request Body                          |
|---------------------|--------|---------------------------|---------------------------------------|
| `/onboarding/wake-up` | POST   | Record wake-up time       | `{ "wakeUpTime": "07:30" }`           |
| `/onboarding/sleep-hours` | POST | Record sleep hours    | `{ "sleepHours": 8 }`                 |
| `/onboarding/dropoff` | POST   | Track user drop-off      | `{ "screen": "wake-up" }`             |

### Analytics
| Endpoint            | Method | Description               |
|---------------------|--------|---------------------------|
| `/stats/dropoffs`   | GET    | Get drop-off statistics   |

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/wysa-sleep-backend.git
   cd wysa-sleep-backend
