const BlockContent = require('@sanity/block-content-to-react')

const serializers = {
    types: {
      code: (props: any) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
}

interface SanityBlockContentPropsInterface{
  content: any[]
}

const SanityBlockContent = ({content}: SanityBlockContentPropsInterface) => {
    return (
        <BlockContent blocks={content} serializers={serializers} />
    );
}


export default SanityBlockContent;