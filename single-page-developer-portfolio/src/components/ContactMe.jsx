/* eslint-disable react/prop-types */
export const ContactMe = ({ children }) => {
    return (<div className="mt-8">
          <h3 className="inline-block border-b-2 border-emerald-400 pb-3 text-xl uppercase">
            {children}
          </h3>
        </div>);
}