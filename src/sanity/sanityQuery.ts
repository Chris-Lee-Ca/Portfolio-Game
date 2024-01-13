// Graph QL Api

import { gql } from "@apollo/client";

export const getAllGameData = gql`
    query GetAllGameData {
        allEducation{
            school,
            descriptionRaw,
            image {
            asset {
                url
            }
            },
            skills,
            degree
        },
        allExperience{
            role,
            company,
            image {
            asset {
                url
            }
            },
            date,
            descriptionRaw,
            skills,
            achievements
        },
        allProject{
            title,
            nickname,
            descriptionRaw,
            image {
            asset {
                url
            }
            },
            tags,
            links{
            title,
            url
            }
        }
    }
`;
