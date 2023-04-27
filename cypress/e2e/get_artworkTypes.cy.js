/// <reference types="cypress"/>

import "../support/e2e";

/* JIRA Refernce
    OPT-1234 - Test case for this test file
    OPT-5678 - Second test case for this test file
*/
describe("GET Artwork Types API Tests", () => {
  const artTypeData = [
    {
      id: 1,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/1",
      title: "Painting",
      aat_id: 300033618,
      source_updated_at: "2019-05-08T19:03:58-05:00",
      updated_at: "2022-04-22T10:38:03-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 23,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/23",
      title: "Vessel",
      aat_id: 300193015,
      source_updated_at: "2019-05-08T19:03:58-05:00",
      updated_at: "2022-03-15T16:31:40-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 22,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/22",
      title: "Basketry",
      aat_id: 300404578,
      source_updated_at: "2019-05-08T19:03:58-05:00",
      updated_at: "2022-03-15T16:31:40-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 21,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/21",
      title: "Miniature room",
      aat_id: 300427608,
      source_updated_at: "2019-05-08T19:03:59-05:00",
      updated_at: "2022-03-15T16:31:40-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 20,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/20",
      title: "Model",
      aat_id: 300047753,
      source_updated_at: "2019-05-08T19:03:57-05:00",
      updated_at: "2022-03-15T16:31:40-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 19,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/19",
      title: "Architectural fragment",
      aat_id: 300190691,
      source_updated_at: "2019-05-08T19:03:57-05:00",
      updated_at: "2022-03-15T16:31:40-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 18,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/18",
      title: "Print",
      aat_id: 300041273,
      source_updated_at: "2019-05-08T19:03:58-05:00",
      updated_at: "2022-03-15T16:31:40-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 17,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/17",
      title: "Performance Arts",
      aat_id: 300121445,
      source_updated_at: "2019-05-08T19:03:57-05:00",
      updated_at: "2022-03-15T16:31:40-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 16,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/16",
      title: "Installation",
      aat_id: 300047896,
      source_updated_at: "2019-05-08T19:03:59-05:00",
      updated_at: "2022-03-15T16:31:40-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 15,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/15",
      title: "Mixed Media",
      aat_id: 300404586,
      source_updated_at: "2019-05-08T19:03:57-05:00",
      updated_at: "2022-03-15T16:31:40-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 14,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/14",
      title: "Drawing and Watercolor",
      aat_id: 300033973,
      source_updated_at: "2019-05-08T19:03:57-05:00",
      updated_at: "2022-03-15T16:31:40-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 12,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/12",
      title: "Costume and Accessories",
      aat_id: 300209261,
      source_updated_at: "2019-05-08T19:03:58-05:00",
      updated_at: "2022-03-15T16:31:40-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 11,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/11",
      title: "Book",
      aat_id: 300028051,
      source_updated_at: "2019-05-08T19:04:00-05:00",
      updated_at: "2022-03-15T16:31:40-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 10,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/10",
      title: "Audio-Video",
      aat_id: 300102067,
      source_updated_at: "2019-05-08T19:03:57-05:00",
      updated_at: "2022-03-15T16:31:40-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 48,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/48",
      title: "Time Based Media",
      aat_id: 300185191,
      source_updated_at: "2020-05-04T12:25:27-05:00",
      updated_at: "2022-03-15T16:31:39-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 47,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/47",
      title: "Materials",
      aat_id: 300010357,
      source_updated_at: "2019-10-07T11:53:19-05:00",
      updated_at: "2022-03-15T16:31:39-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 46,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/46",
      title: "Equipment",
      aat_id: 300122241,
      source_updated_at: "2019-10-07T09:43:09-05:00",
      updated_at: "2022-03-15T16:31:39-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 45,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/45",
      title: "Archives (groupings)",
      aat_id: 300375748,
      source_updated_at: "2019-05-08T19:04:00-05:00",
      updated_at: "2022-03-15T16:31:39-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 44,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/44",
      title: "Medals",
      aat_id: 300391159,
      source_updated_at: "2019-05-08T19:03:59-05:00",
      updated_at: "2022-03-15T16:31:39-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
    {
      id: 42,
      api_model: "artwork-types",
      api_link: "https://api.artic.edu/api/v1/artwork-types/42",
      title: "Furnishings",
      aat_id: 300037335,
      source_updated_at: "2019-05-08T19:03:58-05:00",
      updated_at: "2022-03-15T16:31:39-05:00",
      timestamp: "2023-04-26T20:58:40-05:00",
    },
  ];

  context("No user authorization", () => {
    before("", () => {
      // Any code needed before the test runs
      // Logins
    });

    beforeEach("", () => {});

    after("", () => {
      // Any code needed after the test runs
      // Logouts
    });

    it("GET Artwork Types", () => {
      let requestURL = `${Cypress.env("ARTIC_SERVICE_URL")}/artwork-types`;

      cy.request("GET", requestURL).then((response) => {
        let artworkTypes = response.body.data;
        // Verify success status
        expect(response.status).to.eq(200);
        expect(response.statusText).to.eq("OK");

        // Verify response properties

        artworkTypes.map((artType, index) => {
          expect(artType).to.have.property("id").to.eq(artTypeData[index].id);
          expect(artType).to.have.property(
            "api_model",
            artTypeData[index].api_model
          );
          expect(artType).to.have.property(
            "api_link",
            artTypeData[index].api_link
          );
          expect(artType).to.have.property("title", artTypeData[index].title);
          expect(artType).to.have.property("aat_id", artTypeData[index].aat_id);
          expect(artType).to.have.property(
            "source_updated_at",
            artTypeData[index].source_updated_at
          );
          expect(artType).to.have.property(
            "updated_at",
            artTypeData[index].updated_at
          );
          expect(artType).to.have.property("timestamp");
        });
      });
    });
  });
});
