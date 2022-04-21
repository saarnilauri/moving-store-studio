import S from '@sanity/desk-tool/structure-builder'
import { MdDashboard, MdSettings } from "react-icons/md"

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = listItem =>
  !['page', 'route', 'site-config', 'product'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Pages')
        .icon(MdDashboard)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Routes')
        .schemaType('route')
        .child(S.documentTypeList('route').title('Routes')),
        S.listItem()
  .title('Products By Group')
  .child(
    S.documentTypeList('group')
      .title('Product by group')
      .child(groupId =>
        S.documentList()
          .title('Products')
          .filter('_type == "product" && $groupId == group._ref')
          .params({ groupId })
      )
  ),


      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.listItem()
        .title('Site config')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('config')
            .schemaType('site-config')
            .documentId('global-config')
        )
      
    ])
