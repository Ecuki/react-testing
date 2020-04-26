import checkPropTypes from "check-prop-types";

export const findByTestAtrr = (component, attr) =>
  component.find(`[data-test="${attr}"]`);

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};
