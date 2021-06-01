import React from "react";
import { Form, Button, Message, TextArea, Divider } from "semantic-ui-react";

function CommonInputs({
  user: { about, linkedin, instagram, youtube, github },
  handleChange,
  showSocialLinks,
  setShowSocialLinks
}) {
  return (
    <>
      <Form.Field
        required
        control={TextArea}
        name="about"
        value={about}
        onChange={handleChange}
        placeholder="About (Required)"
      />

      <Button
        content="Add Social Links"
        color="red"
        icon="at"
        type="button"
        onClick={() => setShowSocialLinks(!showSocialLinks)}
      />

      {showSocialLinks && (
        <>
          <Divider />
          <Form.Input
            icon="linkedin"
            iconPosition="left"
            name="linkedin"
            value={linkedin}
            onChange={handleChange}
          />

          <Form.Input
            icon="github"
            iconPosition="left"
            name="github"
            value={github}
            onChange={handleChange}
          />

          <Form.Input
            icon="instagram"
            iconPosition="left"
            name="instagram"
            value={instagram}
            onChange={handleChange}
          />

          <Form.Input
            icon="youtube"
            iconPosition="left"
            name="youtube"
            value={youtube}
            onChange={handleChange}
          />

          <Message
            icon="attention"
            info
            size="small"
            header="Your social network is your net worth!"
            color="blue"
          />
        </>
      )}
    </>
  );
}

export default CommonInputs;